import time

import requests
from selenium import webdriver
from selenium.common.exceptions import WebDriverException, \
    NoSuchElementException


class Anticaptcha:
    # program constants
    PAGE_URL = 'https://queue.ticketmaster.com/?c=ticketmaster&e=090054a1f1f2a463&l=TM_GENERIC_V4&t=https'
    PAGE_GT = 'f2ae6cadcf7886856696502e1d55e00c'
    PAGE_LOAD_TIMEOUT = 3 * 60  # in seconds; this equals to 3 minutes
    SLEEP_TIME = 10
    ANTICAPTHCA_BASE_URL = 'https://api.anti-captcha.com/'
    CLIENT_KEY_FILE = 'client_key.txt'
    GET_CHALLENGE_SCRIPT_FILE = 'get_challenge.js'
    SET_SOLUTION_SCRIPT_FILE = 'set_captcha_solution.js'

    def __init__(self):
        # open browser and get page
        # driver = webdriver.Chrome()
        self.driver = webdriver.Firefox()
        self.driver.set_page_load_timeout(self.PAGE_LOAD_TIMEOUT)

        # default values for properties
        self._client_key = None
        self._challenge = None
        self._script_get_challenge = None
        self._script_set_solution = None

    def anticaptcha(self):
        try:
            self.driver.get(self.PAGE_URL)
        except WebDriverException as e:
            print(e)
            self.driver.close()
            return

        if self.has_captcha():
            self.solve_captcha()

        # do whatever your want with driver - captcha is solved
        return self.driver

    def has_captcha(self):
        while True:
            try:
                h1 = self.driver.find_element_by_tag_name('h1')
            except NoSuchElementException as e:
                print(e)
                return False

            if h1.text == 'Pardon the Interruption':
                return True
            else:
                try:
                    self.driver.find_element_by_id('first-in-line')
                    print('Sleeps for {} seconds'.format(self.SLEEP_TIME))
                    time.sleep(self.SLEEP_TIME)   # wait for laoding needed page
                except NoSuchElementException:
                    return False

    def solve_captcha(self):
        request_json = {
            "clientKey": self.client_key,
            "task":
                {
                    "type": "GeeTestTaskProxyless",
                    "websiteURL": self.PAGE_URL,
                    "gt": self.PAGE_GT,
                    "challenge": self.challenge,
                },
        }
        print(request_json)
        response_json = requests.post(self.ANTICAPTHCA_BASE_URL + 'createTask',
                                      json=request_json).json()
        print(response_json)
        if response_json['errorId'] != 0:
            return

        task_id = response_json['taskId']

        request_json = {
            'clientKey': self.client_key,
            'taskId': task_id,
        }
        print(request_json)
        while True:
            # wait while worker solved captcha
            time.sleep(self.SLEEP_TIME)
            response_json = requests.post(self.ANTICAPTHCA_BASE_URL + 'getTaskResult',
                                         json=request_json).json()
            print(response_json)
            if response_json['errorId'] != 0:
                return
            if response_json['status'] == 'ready':
                captcha_solution = response_json['solution']
                break

        print(captcha_solution)

        self.driver.execute_script(self.script_set_solution.format(
            challenge=captcha_solution['challenge'],
            validate=captcha_solution['validate'],
            seccode=captcha_solution['seccode'],
        ))

        geetest = self.driver.find_element_by_css_selector(
            ':geetest_holder :geetest_wind :geetest_detect')
        geetest.click()

    @property
    def client_key(self):
        if not self._client_key:
            with open(self.CLIENT_KEY_FILE) as f:
                self._client_key = f.read()[:-1]
        return self._client_key

    @property
    def challenge(self):
        if not self._challenge:
            self._challenge = \
                self.driver.execute_script(self.script_get_challenge)
        return self._challenge

    @property
    def script_get_challenge(self):
        if not self._script_get_challenge:
            with open(self.GET_CHALLENGE_SCRIPT_FILE) as f:
                self._script_get_challenge = f.read()
        return self._script_get_challenge

    @property
    def script_set_solution(self):
        if not self._script_set_solution:
            with open(self.SET_SOLUTION_SCRIPT_FILE) as f:
                self._script_set_solution = f.read()
        return self._script_set_solution


if __name__ == '__main__':
    Anticaptcha().anticaptcha()
