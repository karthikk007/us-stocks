import pandas as pd
import os
import time


file_name = 'files/Investment budget - US STOCKS.csv'

def add_parser(subparsers):
    p = subparsers.add_parser('buy',
                        help='buy us stocks')

    p.set_defaults(func=buy_stocks)

    buy_options = p.add_mutually_exclusive_group(required=True)
    buy_options.add_argument('-d', '--dip',
                             required=False,
                             help='buy on dip')
    buy_options.add_argument('-a', '--all',
                             required=False,
                             help='buy all')


    # p.add_argument('-s', '--skip',
    #             required=False, action='store_true',
    #             help='if set, will compute an optimized version IDL endpoints to include in the configuration file based on references to the endpoints in code.')

def buy_stocks(args=None):
    df = pd.read_csv(file_name)

    dict = df.to_dict('records')

    count = 0
    print('Total stocks = ', len(dict))
    for item in dict:
        count += 1
        link = item['LINK']

        print('opening.... count =', count)
        print(link)

        if "coinbase-global-inc-share-price" in link:
            continue
            
        cmd = 'open \"\" ' + link
        os.system(cmd)

        time.sleep(2)


if __name__ == '__main__':
    buy_stocks()