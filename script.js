document.addEventListener('DOMContentLoaded', () => {
    const data = `Date,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024
3/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
3/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
3/31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
4/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
5/31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1
6/6,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1
6/7,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1
6/8,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1
6/9,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1
6/10,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1
6/11,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1
6/12,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1
6/13,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1
6/14,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1
6/15,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1
6/16,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2
6/17,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2
6/18,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2
6/19,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2
6/20,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,1,1,2
6/21,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,1,1,2
6/22,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,3,1,1,2
6/23,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,2,3,1,1,2
6/24,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,2,3,1,1,2
6/25,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,2,3,1,1,2
6/26,1,1,1,2,1,1,1,1,1,2,2,1,2,2,1,2,3,1,1,2
6/27,1,2,1,2,1,1,1,1,1,1,3,1,2,2,1,2,3,1,1,2
6/28,1,2,1,2,1,1,1,2,1,1,3,1,2,2,1,2,3,1,1,2
6/29,1,2,1,3,1,1,1,2,1,1,3,1,2,2,1,2,3,1,1,2
6/30,1,2,1,3,1,1,1,2,1,1,3,1,2,2,1,2,3,1,1,2
7/1,1,2,1,3,1,1,1,2,1,1,3,1,2,2,1,2,3,1,1,2
7/2,1,2,1,3,1,1,1,2,2,2,3,1,2,2,1,2,3,1,1,2
7/3,1,2,1,3,1,1,1,2,2,2,3,1,2,2,1,2,3,1,2,3
7/4,1,2,1,3,1,1,1,2,2,2,4,1,2,2,1,2,3,1,2,3
7/5,1,2,1,3,1,1,1,2,2,2,4,1,2,2,1,2,3,1,2,3
7/6,2,2,1,3,1,1,1,2,2,2,4,1,2,2,1,2,3,1,2,3
7/7,2,2,2,3,1,1,1,2,2,2,4,1,2,2,1,2,3,1,2,3
7/8,2,2,2,2,1,1,1,2,2,2,4,1,2,2,1,2,3,1,2,3
7/9,2,2,3,2,1,1,1,3,2,2,4,1,2,2,1,2,3,1,2,3
7/10,2,2,3,2,1,2,1,3,2,2,4,1,2,2,1,2,3,1,2,3
7/11,2,2,3,3,1,2,1,3,2,2,4,1,2,2,1,2,4,1,2,3
7/12,2,2,3,4,1,2,1,3,2,2,3,1,2,2,1,2,4,1,2,3
7/13,2,2,3,4,1,2,1,3,2,2,3,1,3,2,1,2,4,1,2,3
7/14,2,2,4,4,1,2,1,3,2,2,3,1,3,2,1,2,5,1,2,3
7/15,2,2,4,4,1,2,1,3,2,3,3,1,3,2,1,2,5,1,2,3
7/16,2,2,4,4,1,2,1,3,2,4,2,1,3,2,1,2,5,1,2,3
7/17,2,2,4,4,2,2,1,3,2,4,2,1,3,3,1,2,5,1,2,4
7/18,2,2,4,4,2,2,1,3,2,5,2,1,3,3,1,2,5,1,2,4
7/19,2,2,4,4,2,2,1,2,2,5,2,1,3,3,1,2,5,1,2,5
7/20,2,2,4,4,2,2,1,2,2,5,2,1,3,3,1,2,5,1,2,5
7/21,2,2,4,4,2,2,1,2,2,5,2,1,3,3,1,2,5,1,2,5
7/22,2,3,4,4,2,2,1,2,2,5,2,1,3,3,1,2,5,1,2,5
7/23,2,3,4,4,2,2,1,2,2,5,2,1,3,4,1,2,5,1,3,5
7/24,2,3,4,3,2,2,1,2,2,5,2,1,3,4,1,2,5,1,3,5
7/25,2,4,4,3,3,2,1,2,3,5,2,1,3,4,2,2,5,1,3,5
7/26,2,4,4,3,3,2,1,2,3,5,2,2,3,4,2,2,5,1,3,5
7/27,2,4,4,3,3,2,1,2,3,5,2,2,3,4,2,2,5,1,3,5
7/28,3,4,4,3,3,2,1,2,3,5,2,2,3,4,2,2,5,1,3,5
7/29,3,4,4,3,3,2,1,2,4,5,2,2,3,5,2,2,5,1,3,5
7/30,3,4,3,2,3,2,1,2,4,5,2,2,3,5,2,2,5,1,3,5
7/31,3,4,3,2,3,2,1,2,4,5,2,2,3,5,2,2,5,2,3,5
8/1,3,4,3,2,3,2,1,2,4,5,3,3,3,5,2,2,5,2,3,5
8/2,3,4,3,2,3,2,1,2,4,5,3,3,3,5,2,2,5,2,3,5
8/3,3,4,3,2,3,2,1,2,4,5,3,3,3,5,2,2,5,2,3,5
8/4,3,4,3,2,3,2,1,2,4,5,3,3,4,5,2,2,5,3,3,5
8/5,3,4,3,2,3,2,1,2,4,5,4,3,4,5,2,2,5,3,3,5
8/6,3,4,3,3,3,2,1,2,4,5,4,3,4,5,2,2,5,3,3,5
8/7,3,4,3,3,3,2,1,3,4,5,4,3,4,5,3,2,5,3,3,5
8/8,3,4,3,3,3,2,1,3,4,5,4,3,4,5,3,2,5,3,3,5
8/9,3,4,3,3,3,2,2,3,4,5,4,3,4,5,3,2,5,3,3,5
8/10,4,4,3,3,3,2,2,3,4,5,4,3,4,5,3,2,5,3,3,5
8/11,4,4,3,3,3,2,2,3,4,5,4,3,4,5,3,2,5,3,3,5
8/12,4,4,3,3,3,2,2,3,4,5,4,3,5,5,3,2,5,3,4,5
8/13,4,4,3,3,2,2,2,3,4,5,5,3,5,5,3,2,5,3,4,5
8/14,4,4,3,3,2,2,2,4,4,5,5,3,5,5,2,2,5,3,4,5
8/15,4,4,3,4,2,2,2,4,4,5,5,3,5,5,2,2,5,3,4,5
8/16,4,4,3,4,2,2,2,4,4,5,5,3,5,5,2,2,5,3,4,5
8/17,4,4,3,4,2,2,2,4,4,5,5,3,5,5,2,3,5,3,4,5
8/18,3,4,4,4,2,2,2,4,4,4,5,3,5,5,2,3,5,3,4,5
8/19,3,4,4,4,2,2,2,4,4,4,5,3,5,5,2,4,5,3,5,5
8/20,3,4,4,4,2,2,2,4,4,4,5,3,5,5,2,4,5,3,5,5
8/21,3,4,3,4,2,3,2,4,4,4,5,3,5,5,2,4,5,3,5,5
8/22,3,5,3,4,2,3,2,4,4,3,5,3,5,5,2,4,5,3,5,5
8/23,3,5,3,4,2,3,2,4,4,3,5,3,5,5,2,4,5,3,4,5
8/24,3,5,3,4,2,3,2,4,4,3,5,3,5,5,2,4,5,3,4,5
8/25,3,5,3,4,2,3,2,3,4,3,5,3,5,5,2,4,5,3,4,5
8/26,3,5,3,4,2,3,2,3,4,3,5,3,5,5,2,4,5,3,5,4
8/27,3,5,3,4,2,3,3,3,3,3,5,3,5,5,2,4,5,3,5,4
8/28,3,5,3,3,2,3,3,3,3,3,5,3,5,5,2,4,5,3,5,4
8/29,3,5,3,3,2,3,3,3,2,3,5,3,5,5,2,4,5,3,5,4
8/30,3,5,3,3,2,3,3,3,2,3,5,3,5,4,2,4,5,3,5,4
8/31,3,5,3,3,2,3,3,3,2,3,5,3,5,4,2,4,5,3,5,4
9/1,3,5,3,3,2,2,3,3,2,3,5,3,5,4,2,4,5,3,5,4
9/2,3,5,3,3,2,2,3,3,2,3,5,2,5,4,2,4,5,4,5,4
9/3,3,5,3,2,2,2,3,3,2,3,5,2,5,4,2,4,5,4,5,4
9/4,3,5,3,2,2,2,3,2,2,3,5,2,5,4,2,4,5,4,5,4
9/5,3,5,3,2,2,2,3,2,2,2,4,2,5,4,2,4,5,4,4,4
9/6,3,5,3,2,2,2,3,2,2,2,4,2,5,4,2,4,5,4,4,5
9/7,2,5,3,2,2,2,3,2,2,2,4,2,5,3,2,4,5,4,4,5
9/8,2,5,3,2,2,2,3,2,2,2,4,2,5,3,2,5,5,4,4,5
9/9,2,5,3,2,2,2,4,2,2,2,4,2,5,3,2,5,5,4,4,5
9/10,2,5,3,2,2,2,4,3,2,2,4,2,5,3,2,5,5,4,4,5
9/11,2,5,3,2,2,2,4,3,2,2,4,2,5,3,2,5,5,4,4,5
9/12,2,5,3,2,2,2,4,4,2,2,4,2,5,3,1,5,5,4,4,5
9/13,2,5,3,2,2,1,4,4,2,2,3,2,5,3,1,5,5,4,4,5
9/14,2,5,3,2,2,1,4,4,2,2,3,2,5,3,1,5,5,4,4,5
9/15,2,4,3,3,2,1,3,4,2,3,3,2,5,3,1,5,5,4,4,5
9/16,2,4,3,3,2,1,3,4,2,3,3,2,5,3,1,5,5,4,4,5
9/17,2,4,3,3,2,1,3,4,1,3,3,2,5,3,1,5,4,3,4,5
9/18,2,3,2,3,2,1,2,4,1,3,3,2,5,3,1,5,4,3,4,5
9/19,2,3,2,3,2,1,2,4,1,3,3,2,5,3,1,5,4,3,3,5
9/20,2,3,2,3,2,1,2,4,1,3,3,2,5,2,1,5,4,3,3,4
9/21,2,3,2,3,2,1,2,4,1,3,3,2,4,2,1,5,4,3,3,4
9/22,2,3,2,3,2,1,2,4,1,3,3,2,4,2,1,5,4,3,3,4
9/23,2,3,2,3,2,1,2,4,1,2,2,2,4,2,1,5,4,3,3,4
9/24,2,3,2,3,2,1,2,4,1,2,2,2,4,2,1,5,4,3,3,4
9/25,2,3,2,3,2,1,2,4,1,2,2,2,3,2,1,4,3,3,3,4
9/26,2,3,2,3,2,1,2,4,1,2,2,2,3,2,1,4,3,3,2,4
9/27,2,3,2,3,2,1,2,3,1,2,2,2,3,2,1,4,3,2,2,3
9/28,2,3,2,3,2,1,2,3,1,2,2,2,3,2,1,4,3,2,2,3
9/29,2,3,2,3,2,1,2,3,1,2,2,2,3,2,1,4,3,2,2,3
9/30,2,3,2,3,2,1,2,3,1,1,2,2,3,2,1,4,3,2,2,3
10/1,2,3,1,3,1,1,2,3,1,1,2,1,3,2,1,3,3,2,2,3
10/2,2,3,1,2,1,1,2,3,1,1,2,1,2,1,1,3,3,2,2,3
10/3,1,2,1,2,1,1,2,3,1,1,2,1,2,1,1,3,3,2,2,3
10/4,1,2,1,1,1,1,2,3,1,1,2,1,2,1,1,3,2,2,2,3
10/5,1,2,1,1,1,1,2,3,1,1,2,1,2,1,1,3,2,2,2,3
10/6,1,2,1,1,1,1,1,3,1,1,2,1,2,1,1,3,2,2,2,3
10/7,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,3,2,2,2,3
10/8,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,3,2,2,2,3
10/9,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,3,2,2,2,3
10/10,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,2,2,2,3
10/11,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,2,2,2,2
10/12,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,2,2
10/13,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/14,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/15,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/16,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/17,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/18,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/19,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/20,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,2
10/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2
10/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2
10/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2
10/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2
10/31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2
11/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
11/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
11/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
12/31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0
`;

const parsedData = d3.csvParse(data);

const years = parsedData.columns.slice(1);

// Populate year dropdowns
const year1Select = document.getElementById('year1');
const year2Select = document.getElementById('year2');

years.forEach(year => {
    const option1 = document.createElement('option');
    option1.value = year;
    option1.text = year;
    year1Select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = year;
    option2.text = year;
    year2Select.appendChild(option2);
});

document.getElementById('compareButton').addEventListener('click', () => {
    const year1 = year1Select.value;
    const year2 = year2Select.value;

    if (year1 && year2) {
        drawChart(parsedData, year1, year2);
    }
});

function drawChart(data, year1, year2) {
    const chart = d3.select('#chart');
    chart.selectAll('*').remove(); // Clear previous chart

    const containerWidth = chart.node().offsetWidth;
    const margin = { top: 20, right: 30, bottom: 60, left: 80 }; // Adjusted left margin
    const width = containerWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = chart.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .domain(data.map(d => d.Date))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, 5])
        .range([height, 0]);

    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickValues(x.domain().filter((d, i) => !(i % 10))))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end')
        .style('font-size', '10px');

    svg.append('g')
        .call(d3.axisLeft(y).ticks(6).tickFormat(d3.format("d")));

    // Tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

    const bars1 = svg.selectAll('.bar1')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar1')
        .attr('x', d => x(d.Date))
        .attr('y', d => y(d[year1]))
        .attr('width', x.bandwidth() / 2)
        .attr('height', d => height - y(d[year1]))
        .attr('fill', '#377eb8') // Color-blind friendly
        .on('mouseover', (event, d) => {
            tooltip.transition()
                .duration(200)
                .style('opacity', .9);
            tooltip.html(`Date: ${d.Date}<br/>${year1}: ${d[year1]}`)
                .style('left', (event.pageX + 5) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', (d) => {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    const bars2 = svg.selectAll('.bar2')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar2')
        .attr('x', d => x(d.Date) + x.bandwidth() / 2)
        .attr('y', d => y(d[year2]))
        .attr('width', x.bandwidth() / 2)
        .attr('height', d => height - y(d[year2]))
        .attr('fill', '#e41a1c') // Color-blind friendly
        .on('mouseover', (event, d) => {
            tooltip.transition()
                .duration(200)
                .style('opacity', .9);
            tooltip.html(`Date: ${d.Date}<br/>${year2}: ${d[year2]}`)
                .style('left', (event.pageX + 5) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', (d) => {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('Date');

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left + 40) // Adjusted x position
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .attr('text-anchor', 'middle')
        .text('Preparedness Level');

    // Add legend
    const legend = d3.select('#legend');
    legend.selectAll('*').remove(); // Clear previous legend

    const legendData = [
        { color: '#377eb8', text: `Year ${year1}`, class: 'bar1' },
        { color: '#e41a1c', text: `Year ${year2}`, class: 'bar2' }
    ];

    const legendItems = legend.selectAll('.legend-item')
        .data(legendData)
        .enter().append('div')
        .attr('class', 'legend-item')
        .on('click', function (event, d) {
            const currentOpacity = d3.selectAll(`.${d.class}`).style('opacity');
            d3.selectAll(`.${d.class}`).style('opacity', currentOpacity == 1 ? 0 : 1);
        });

    legendItems.append('div')
        .attr('class', 'legend-color')
        .style('background-color', d => d.color);

    legendItems.append('span')
        .text(d => d.text);
}
});
