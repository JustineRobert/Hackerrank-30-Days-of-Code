/*Day 11: 2D Arrays*/
/*https://www.hackerrank.com/challenges/30-2d-arrays/problem*/
#include <bits/stdc++.h>

using namespace std;


int main()
{
    //code starts here
    int sum;
    int maxsum = numeric_limits<int>::min();
    vector< vector<int> > arr(6,vector<int>(6));
    for(int arr_i = 0; arr_i < 6; arr_i++)
    {
        for(int arr_j = 0; arr_j < 6; arr_j++)
        {
            cin >> arr[arr_i][arr_j];
        }
    }
    for(int i=0; i<4; i++)
    {
        for(int j=0; j<4; j++)
        {
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(sum > maxsum)
            {
                maxsum = sum;
            }
        }
    }
    cout << maxsum;
    return 0;
}
//Code logic ends here
   
