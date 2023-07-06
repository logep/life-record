- [How to make a great R reproducible example](https://stackoverflow.com/questions/5963269/how-to-make-a-great-r-reproducible-example)

When discussing performance with colleagues, teaching, sending a bug report or searching for guidance on mailing lists and here on Stack Overflow, a reproducible example is often asked and always ...

- [What is a NullPointerException, and how do I fix it?](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it)

What are Null Pointer Exceptions (java.lang.NullPointerException) and what causes them?

What methods/tools can be used to determine the cause so that you stop the exception from causing the program ...

- [How do I return the response from an asynchronous call?](https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call)

How do I return the response/result from a function foo that makes an asynchronous request?
I am trying to return the value from the callback, as well as assigning the result to a local variable ...

- [How can I prevent SQL injection in PHP?](https://stackoverflow.com/questions/60174/how-can-i-prevent-sql-injection-in-php)

If user input is inserted without modification into an SQL query, then the application becomes vulnerable to SQL injection, like in the following example:

$unsafe_variable = $_POST['user_input']; 

...

- [RegEx match open tags except XHTML self-contained tags](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)

I need to match all of these opening tags:

<p>
<a href="foo">
But not these:

<br />
<hr class="foo" />
I came up with this and wanted to make sure I've got it right. I am ...

- [What is a NullReferenceException, and how do I fix it?](https://stackoverflow.com/questions/4660142/what-is-a-nullreferenceexception-and-how-do-i-fix-it)

I have some code and when it executes, it throws a NullReferenceException, saying:
  Object reference not set to an instance of an object.
What does this mean, and what can I do to fix this error?

- [Is floating point math broken?](https://stackoverflow.com/questions/588004/is-floating-point-math-broken)

Consider the following code:
0.1 + 0.2 == 0.3  ->  false

0.1 + 0.2         ->  0.30000000000000004

Why do these inaccuracies happen?

- [The Definitive C++ Book Guide and List](https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list)

This question attempts to collect the few pearls among the dozens of bad C++ books that are published every year.
Unlike many other programming languages, which are often picked up on the go from ...

- [How do I compare strings in Java?](https://stackoverflow.com/questions/513832/how-do-i-compare-strings-in-java)

I've been using the == operator in my program to compare all my strings so far.
However, I ran into a bug, changed one of them into .equals() instead, and it fixed the bug.

Is == bad? When should it ...

- [What is an undefined reference/unresolved external symbol error and how do I fix it?](https://stackoverflow.com/questions/12573816/what-is-an-undefined-reference-unresolved-external-symbol-error-and-how-do-i-fix)

What are undefined reference/unresolved external symbol errors? What are common causes and how to fix/prevent them?

- ["Notice: Undefined variable", "Notice: Undefined index", "Warning: Undefined array key", and "Notice: Undefined offset" using PHP](https://stackoverflow.com/questions/4261133/notice-undefined-variable-notice-undefined-index-warning-undefined-arr)

I'm running a PHP script and continue to receive errors like:

Notice: Undefined variable: my_variable_name in C:\wamp\www\mypath\index.php on line 10
Notice: Undefined index: my_index C:\wamp\www\...

- [Why shouldn't I use mysql_* functions in PHP?](https://stackoverflow.com/questions/12859942/why-shouldnt-i-use-mysql-functions-in-php)

What are the technical reasons for why one shouldn't use mysql_* functions? (e.g. mysql_query(), mysql_connect() or mysql_real_escape_string())?

Why should I use something else even if they work on ...

- [PHP parse/syntax errors; and how to solve them](https://stackoverflow.com/questions/18050071/php-parse-syntax-errors-and-how-to-solve-them)

Everyone runs into syntax errors. Even experienced programmers make typos. For newcomers, it's just part of the learning process. However, it's often easy to interpret error messages such as:

PHP ...

- [Event binding on dynamically created elements?](https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements)

I have a bit of code where I am looping through all the select boxes on a page and binding a .hover event to them to do a bit of twiddling with their width on mouse on/off.

This happens on page ready ...

- [Do I cast the result of malloc?](https://stackoverflow.com/questions/605845/do-i-cast-the-result-of-malloc)

In this question, someone suggested in a comment that I should not cast the result of malloc. i.e., I should do this:
int *sieve = malloc(sizeof(*sieve) * length);

rather than:
int *sieve = (int *) ...

- [How to access the correct `this` inside a callback](https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback)

I have a constructor function which registers an event handler:


function MyConstructor(data, transport) {
    this.data = data;
    transport.on('data', function () {
        alert(this.data);
    ...

- [JavaScript closure inside loops – simple practical example](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example)

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value:", i);
  ...

- [How to avoid using Select in Excel VBA](https://stackoverflow.com/questions/10714251/how-to-avoid-using-select-in-excel-vba)

I've heard much about the understandable abhorrence of using .Select in Excel VBA, but I am unsure of how to avoid using it. I am finding that my code would be more re-usable if I were able to use ...

- [Why is my variable unaltered after I modify it inside of a function? - Asynchronous code reference](https://stackoverflow.com/questions/23667086/why-is-my-variable-unaltered-after-i-modify-it-inside-of-a-function-asynchron)

Given the following examples, why is outerScopeVar undefined in all cases?
var outerScopeVar;

var img = document.createElement('img');
img.onload = function() {
    outerScopeVar = this.width;
};
img....

- [Why is "using namespace std;" considered bad practice?](https://stackoverflow.com/questions/1452721/why-is-using-namespace-std-considered-bad-practice)

I have heard using namespace std; is bad practice, and that I should use std::cout and std::cin directly instead.
Why is this? Does it risk declaring variables that share the same name as something in ...

- [Reference - What does this regex mean?](https://stackoverflow.com/questions/22937618/reference-what-does-this-regex-mean)

What is this?
This is a collection of common Q&A. This is also a Community Wiki, so everyone is invited to participate in maintaining it.
Why is this?
regex is suffering from give me ze code type ...

- [How to make good reproducible pandas examples](https://stackoverflow.com/questions/20109391/how-to-make-good-reproducible-pandas-examples)

Having spent a decent amount of time watching both the r and pandas tags on SO, the impression that I get is that pandas questions are less likely to contain reproducible data. This is something that ...

- [Reference - What does this error mean in PHP?](https://stackoverflow.com/questions/12769982/reference-what-does-this-error-mean-in-php)

What is this?
This is a number of answers about warnings, errors, and notices you might encounter while programming PHP and have no clue how to fix them. This is also a Community Wiki, so everyone is ...

- [PHP mail function doesn't complete sending of e-mail](https://stackoverflow.com/questions/24644436/php-mail-function-doesnt-complete-sending-of-e-mail)

<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: yoursite.com';
    $to = 'contact@yoursite.com';
    $subject = 'Customer ...

- [Why does jQuery or a DOM method such as getElementById not find the element?](https://stackoverflow.com/questions/14028959/why-does-jquery-or-a-dom-method-such-as-getelementbyid-not-find-the-element)

What are the possible reasons for document.getElementById, $("#id") or any other DOM method / jQuery selector not finding the elements?
Example problems include:

jQuery silently failing to ...

- [How to fix "Headers already sent" error in PHP](https://stackoverflow.com/questions/8028957/how-to-fix-headers-already-sent-error-in-php)

When running my script, I am getting several errors like this:
  Warning: Cannot modify header information - headers already sent by (output started at /some/file.php:12) in /some/file.php on line 23...

- [Is Java "pass-by-reference" or "pass-by-value"?](https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value)

I always thought Java uses pass-by-reference. However, I read a blog post which claims that Java uses pass-by-value. I don't think I understand the distinction the author is making.
What is the ...

- [UTF-8 all the way through](https://stackoverflow.com/questions/279170/utf-8-all-the-way-through)

I'm setting up a new server and want to support UTF-8 fully in my web application. I have tried this in the past on existing servers and always seem to end up having to fall back to ISO-8859-1.

Where ...

- [How can I access and process nested objects, arrays, or JSON?](https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json)

I have a nested data structure containing objects and arrays. How can I extract the information, i.e. access a specific or multiple values (or keys)?

For example:

var data = {
    code: 42,
    ...

- [Why can templates only be implemented in the header file?](https://stackoverflow.com/questions/495021/why-can-templates-only-be-implemented-in-the-header-file)

Quote from The C++ standard library: a tutorial and handbook:
  The only portable way of using templates at the moment is to implement them in header files by using inline functions.
Why is this?

(...

- [Official locator strategies for the webdriver](https://stackoverflow.com/questions/48369043/official-locator-strategies-for-the-webdriver)

In the official W3C webdriver documentation, it's clearly stated that the location strategies are:
State                       Keyword
-----------------------------------------------
CSS selector      ...

- [When to use single quotes, double quotes, and backticks in MySQL](https://stackoverflow.com/questions/11321491/when-to-use-single-quotes-double-quotes-and-backticks-in-mysql)

I am trying to learn the best way to write queries. I also understand the importance of being consistent. Until now, I have randomly used single quotes, double quotes, and backticks without any real ...

- [How do you parse and process HTML/XML in PHP?](https://stackoverflow.com/questions/3577641/how-do-you-parse-and-process-html-xml-in-php)

How can one parse HTML/XML and extract information from it?

- [How to use ThreeTenABP in Android Project](https://stackoverflow.com/questions/38922754/how-to-use-threetenabp-in-android-project)

I'm using Android Studio 2.1.2 and my Java setup is the following:
>java -version
> openjdk version "1.8.0_91"
> OpenJDK Runtime Environment (build 1.8.0_91-8u91-b14-3ubuntu1~15.10....

- [Why is iostream::eof inside a loop condition (i.e. `while (!stream.eof())`) considered wrong?](https://stackoverflow.com/questions/5605125/why-is-iostreameof-inside-a-loop-condition-i-e-while-stream-eof-cons)

I just found a comment in this answer saying that using iostream::eof in a loop condition is "almost certainly wrong". I generally use something like while(cin>>n) - which I guess implicitly ...

- [How do I create variable variables?](https://stackoverflow.com/questions/1373164/how-do-i-create-variable-variables)

I know that some other languages, such as PHP, support a concept of "variable variable names" - that is, the contents of a string can be used as part of a variable name.
I heard that this is ...

- [How to test multiple variables for equality against a single value?](https://stackoverflow.com/questions/15112125/how-to-test-multiple-variables-for-equality-against-a-single-value)

I'm trying to make a function that will compare multiple variables to an integer and output a string of three letters. I was wondering if there was a way to translate this into Python. So say:
x = 0
y ...

- [Asking the user for input until they give a valid response](https://stackoverflow.com/questions/23294658/asking-the-user-for-input-until-they-give-a-valid-response)

I am writing a program that accepts user input.
#note: Python 2.7 users should use `raw_input`, the equivalent of 3.X's `input`
age = int(input("Please enter your age: "))
if age >= 18: 
 ...

- [Why is “while( !feof(file) )” always wrong?](https://stackoverflow.com/questions/5431941/why-is-while-feoffile-always-wrong)

What is wrong with using feof() to control a read loop?  For example:
#include <stdio.h>
#include <stdlib.h>

int
main(int argc, char **argv)
{
    char *path = "stdin";
    FILE ...

- [What is the difference between client-side and server-side programming?](https://stackoverflow.com/questions/13840429/what-is-the-difference-between-client-side-and-server-side-programming)

I have this code:

<script type="text/javascript">
    var foo = 'bar';
    <?php
        file_put_contents('foo.txt', ' + foo + ');
    ?>

    var baz = <?php echo 42; ?>;
    ...

- [What to do with mysqli problems? Errors like mysqli_fetch_array(): Argument #1 must be of type mysqli_result and such](https://stackoverflow.com/questions/22662488/what-to-do-with-mysqli-problems-errors-like-mysqli-fetch-array-argument-1-m)

In my local/development environment, the MySQLi query is performing OK. However, when I upload it on my web host environment, I get this error:

Fatal error: Call to a member function bind_param() on ...

- [What causes a java.lang.ArrayIndexOutOfBoundsException and how do I prevent it?](https://stackoverflow.com/questions/5554734/what-causes-a-java-lang-arrayindexoutofboundsexception-and-how-do-i-prevent-it)

What does ArrayIndexOutOfBoundsException mean and how do I get rid of it? 

Here is a code sample that triggers the exception:

String[] names = { "tom", "bob", "harry" };
for (int i = 0; i <= ...

- [What is The Rule of Three?](https://stackoverflow.com/questions/4172722/what-is-the-rule-of-three)

What does copying an object mean?
What are the copy constructor and the copy assignment operator?
When do I need to declare them myself?
How can I prevent my objects from being copied?

- [SQL injection that gets around mysql_real_escape_string()](https://stackoverflow.com/questions/5741187/sql-injection-that-gets-around-mysql-real-escape-string)

Is there an SQL injection possibility even when using mysql_real_escape_string() function?

Consider this sample situation. SQL is constructed in PHP like this:

$login = mysql_real_escape_string(...

- [How does the "this" keyword work, and when should it be used?](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work-and-when-should-it-be-used)

I am looking to find a clear explanation of what the "this" keyword does, and how to use it correctly.
It seems to behave strangely, and I don't fully understand why.
How does this work and ...

- [Scanner is skipping nextLine() after using next() or nextFoo()?](https://stackoverflow.com/questions/13102045/scanner-is-skipping-nextline-after-using-next-or-nextfoo)

I am using the Scanner methods nextInt() and nextLine() for reading input. 

It looks like this:

System.out.println("Enter numerical value");    
int option;
option = input.nextInt(); // Read ...

- [How slicing in Python works](https://stackoverflow.com/questions/509211/how-slicing-in-python-works)

How does Python's slice notation work? That is: when I write code like a[x:y:z], a[:], a[::2] etc., how can I understand which elements end up in the slice? Please include references where appropriate....

- [What is a debugger and how can it help me diagnose problems?](https://stackoverflow.com/questions/25385173/what-is-a-debugger-and-how-can-it-help-me-diagnose-problems)

This is intended to be a general-purpose question to assist new programmers who have a problem with a program, but who do not know how to use a debugger to diagnose the cause of the problem.
This ...

- [List of lists changes reflected across sublists unexpectedly](https://stackoverflow.com/questions/240178/list-of-lists-changes-reflected-across-sublists-unexpectedly)

I created a list of lists:
>>> xs = [[1] * 4] * 3
>>> print(xs)
[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]

Then, I changed one of the innermost values:
>>> xs[0][0] = 5
>...

- [How can I pivot a dataframe?](https://stackoverflow.com/questions/47152691/how-can-i-pivot-a-dataframe)

What is pivot?
How do I pivot?
Long format to wide format?

I've seen a lot of questions that ask about pivot tables, even if they don't know it.  It is virtually impossible to write a canonical ...

