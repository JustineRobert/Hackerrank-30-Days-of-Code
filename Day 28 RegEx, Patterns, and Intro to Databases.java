/*Day 28: RegEx, Patterns, and Intro to Databases
https://www.hackerrank.com/challenges/30-regex-patterns/problem*/

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

import java.util.regex.Matcher;
import java.util.regex.Pattern; 

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        String emailRegEx = ".+@gmail\\.com$";
        Pattern pat = Pattern.compile(emailRegEx);
        //To compile given regular expressions {string provided}

        List<String> lst = new ArrayList();
        for (int i = 0; i < num; i++){
            String name = scanner.next();
            String email = scanner.next();
            Matcher matcher = pat.matcher(email);
            if (matcher.find()){ 
                //To search for multiple occurences of regex
                lst.add(name);
            }
        }
        Collections.sort(lst);  //sorting list names 
        for (String name : lst){
            System.out.println(name);
        }
    }
}
