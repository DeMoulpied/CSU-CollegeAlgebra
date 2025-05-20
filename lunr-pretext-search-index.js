var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  A large portion of all chapters are addapted from Precalculus An Investigation of Functions by David Lippman and Melonie Rasmussen, originally licensed under a Creative Commons Attribution-ShareAlike International License.  Sections of Chapter 1 were adapted from Active Prelude to Calculus by Matthew Boelkins, originally licensed under a Creative Commons Attribution-ShareAlike International License.  "
},
{
  "id": "Chapter1Section2",
  "level": "1",
  "url": "Chapter1Section2.html",
  "type": "Section",
  "number": "1.1",
  "title": "Functions and Notation",
  "body": " Functions and Notation   What is a Function?  The natural world is full of relationships between quantities that change. When we see these relationships, it is natural for us to ask, ”If I know one quantity, can I then determine the other?” This establishes the idea of an input quantity, or independent variable, and a corresponding output quantity, or dependent variable. From this we get the notion of a functional relationship in which the output can be determined from the input.  For some quantities, like height and age, there are certainly relationships between these quantities. Given a specific person and any age, it is easy enough to determine their height, but if we tried to reverse that relationship and determine age from a given height, that would be problematic, since most people maintain the same height for many years.   Function   A rule for a relationship between an input, or independent, quantity and an output, or dependent, quantity in which each input value uniquely determines one output value. We say, “the output is a function of the input.”      In the height and age example above, is height a function of age? Is age a function of height?  In the height and age example above, it would be correct to say that height is a function of age, since each age uniquely determines a height. For example, on my 18th birthday, I had exactly one height of 69 inches.  However, age is not a function of height, since one height input might correspond with more than one output age. For example, for an input height of 70 inches, there is more than one output of age since I was 70 inches at the age of 20 and 21.      At a coffee shop, the menu consists of items and their prices. Is price a function of the item? Is the item a function of the price?  We could say that price is a function of the item, since each input of an item has one output of a price corresponding to it. We could not say that item is a function of price, since two items might have the same price.      In many classes the overall percentage you earn in the course corresponds to a decimal grade point. Is decimal grade a function of percentage? Is percentage a function of decimal grade?  For any percentage earned, there would be a decimal grade associated, so we could say that the decimal grade is a function of percentage. That is, if you input the percentage, your output would be a decimal grade. Percentage may or may not be a function of decimal grade, depending upon the teacher’s grading scheme. With some grading systems, there are a range of percentages that correspond to the same decimal grade.     One-to-One Function   Sometimes in a relationship each input corresponds to exactly one output, and every output corresponds to exactly one input. We call this kind of relationship a one-to-one function.    From Example 3, if each unique percentage corresponds to one unique decimal grade point and each unique decimal grade point corresponds to one unique percentage then it is a one-to-one function.   Let’s consider bank account information.  Is your balance a function of your bank account number? (If you input a bank account number does it make sense that the output is your balance?)      Is your bank account number a function of your balance? (if you input a balance does it make sense that the output is your bank account number?)     Function Notation  To simplify writing out expressions and equations involving functions, a simplified notation is often used. We also use descriptive variables to help us remember the meaning of the quantities in the problem.  Rather than write ”height is a function of age”, we could use the descriptive variable to represent height and we could use the descriptive variable to represent age.  “Height is a function of age”, then if we name the function we can write  “ is of ” or more simply   .  Be careful - the parentheses indicate that age is input into the function (Note: do not confuse these parentheses with multiplication! It does not mean “ times ”).   Function Notation   The notation defines a function named . This would be read “output is of input”      Introduce function notation to represent a function that takes as input the name of a month and gives as output the number of days in that month.  The number of days in a month is a function of the name of the month, so if we name the function , we could write “ ” or .  For example, , since March has 31 days. The notation reminds us that the number of days, (the output) is dependent on the name of the month, (the input)      A function gives the number of police officers, , in a town in year . What does tell us?  When we read , we see the input quantity is 2005, which is a value for the input quantity of the function, the year ( ). The output value is 300, the number of police officers ( ), a value for the output quantity. Remember . This tells us that in the year 2005 there were 300 police officers in the town.      Tables as Functions  Functions can be represented in many ways: Words (as we did in the last few examples), tables of values, graphs, or formulas. Represented as a table, we are presented with a list of input and output values.  In some cases, these values represent everything we know about the relationship, while in other cases the table is simply providing us a few select values from a more complete relationship.  Table 1: This table represents the input, number of the month (January = 1, February = 2, and so on) while the output is the number of days in that month. This represents everything we know about the months and days for a given year (that is not a leap year)                                (input) Month number,   1  2  3  4  5  6  7  8  9  10  11  12    (output) Days in month,   31  28  31  30  31  30  31  31  30  31  30  31    Table 2: The table below defines a function . Remember this notation tells us is the name of the function that takes the input and gives the output .                   1  2  3  4  5       8  6  7  6  8    Table 3: This table represents the age of children in years and their corresponding heights. This represents just some of the data available for height and ages of children.                    (input) , age in years  5  5  6  7  8  9  10    (output) , height inches  40  42  44  47  50  52  54      Which of these tables define a function (if any)? Are any of them one-to-one?        Input  Output    2  1    5  3    8  6          Input  Output    -3  5    0  1    4  5          Input  Output    1  0    5  2    5  4    The first and second tables define functions. In both, each input corresponds to exactly one output. The third table does not define a function since the input value of 5 corresponds with two different output values.  Only the first table is one-to-one; it is both a function, and each output corresponds to exactly one input. Although table 2 is a function, because each input corresponds to exactly one output, each output does not correspond to exactly one input so this function is not one-to-one. Table 3 is not even a function and so we don’t even need to consider if it is a one-to-one function.     If each percentage earned translated to one letter grade, would this be a function? Is it one-to-one?     Solving and Evaluating Functions  When we work with functions, there are two typical things we do: evaluate and solve. Evaluating a function is what we do when we know an input, and use the function to determine the corresponding output. Evaluating will always produce one result, since each input of a function corresponds to exactly one output. When we have a formula for the function we are evaluating, we always want to make sure we are performing operations in the correct order, commonly known as the “Order of Operations”. You have likely heard of or seen the order of operations in a previous class: Parenthesis, Exponents, Multiply, Divide, Addition, Subtraction. We also need to remember that sometimes these steps are nested within each other. For example, in the function , if I wanted to evaluate , I would need to first simplify the terms inside of the parenthesis, and I would need to follow proper order of operations INSIDE of the parenthesis. So, I would evaluate first, then move outside our parenthesis to simplify .  Solving equations involving a function is what we do when we know an output and use the function to determine the inputs that would produce that output. Solving a function could produce more than one solution, since different inputs can produce the same output. Since solving an equation is the “opposite” of evaluating an equation, it can be helpful to think of using the “opposite” order of operations. For example, using our function from above, if we wanted to solve , we would need to find the value of that makes the equation true. Since our goal is to get by itself, we can follow the reverse order of operations to isolate . First, we subtract the 9 to get , then divide both sides of the equation by 2 to get . Now that we are inside of the parenthesis we can repeat the process by adding 3 and then dividing both sides by 5 to get our solution of .    Using the table shown, where :                   1  2  3  4  5       8  6  7  6  8    a) Evaluate   Evaluating (read: “ of 3”) means that we need to determine the output value, , of the function given the input value of . Looking at the table, we see the output corresponding to is , allowing us to conclude .  b) Solve   Solving means we need to determine what input values, , produce an output value of 6. Looking at the table we see there are two solutions: and .  When we input 2 into the function , our output is   When we input 4 into the function , our output is also      Using the function in Example 7, evaluate .     Graphs as Functions  Oftentimes a graph of a relationship can be used to define a function. By convention, graphs are typically created with the input quantity along the horizontal axis and the output quantity along the vertical.  The most common graph has y on the vertical axis and x on the horizontal axis, and we say y is a function of x, or y = f(x) when the function is named f.   The xy coordinate plane.    A coordinate plane grid with the horizontal axis labeled with the variable x and the vertical axis labeled with the variable y.       Which of these graphs defines a function ? Which of these graphs defines a one-to-one function?   Graph 1    Graph of a smooth curve that increases to negative 1 comma 3, decreases to 1 comma negative 3, then increases.      Graph 2    Graph of a decreasing straight line.      Graph 3    Graph of a circle with radius 3 centered at the origin.     Looking at the three graphs above, the first two define a function , since for each input value along the horizontal axis there is exactly one output value corresponding, determined by the -value of the graph. The 3rd graph does not define a function since some input values, such as , correspond with more than one output value.  Graph 1 is not a one-to-one function. For example, the output value 3 has two corresponding input values, -1 and 2.3  Graph 2 is a one-to-one function; each input corresponds to exactly one output, and every output corresponds to exactly one input.  Graph 3 is not even a function so there is no reason to even check to see if it is a one-to-one function.     Vertical line test   The vertical line test is a handy way to think about whether a graph defines the vertical output as a function of the horizontal input. Imagine drawing vertical lines through the graph. If any vertical line would cross the graph more than once, then the graph does not define only one vertical output for each horizontal input.     Horizontal Line Test   Once you have determined that a graph defines a function, an easy way to determine if it is a one-to-one function is to use the horizontal line test. Draw horizontal lines through the graph. If any horizontal line crosses the graph more than once, then the graph does not define a one-to-one function.    Evaluating a function using a graph requires taking the given input and using the graph to look up the corresponding output. Solving a function equation using a graph requires taking the given output and looking on the graph to determine the corresponding input.    Given the graph of f(x),  a) Evaluate   b) Solve    Graph of    A U-shaped graph passing through negative 1 comma 4, 0 comma 1, 1 comma 0, 2 comma 1, and 3 comma 4.     a) To evaluate , we find the input of on the horizontal axis. Moving up to the graph gives the point , giving an output of . .  b) To solve , we find the value 4 on the vertical axis because if then 4 is the output. Moving horizontally across the graph gives two points with the output of 4: and . These give the two solutions to : or .  This means and , or when the input is -1 or 3, the output is 4.    Notice that while the graph in the previous example is a function, getting two input values for the output value of 4 shows us that this function is not one-to-one.   Using the graph from example 9, solve .     Formulas as Functions  When possible, it is very convenient to define relationships using formulas. If it is possible to express the output as a formula involving the input quantity, then we can define a function.    Express the relationship as a function if possible.  To express the relationship in this form, we need to be able to write the relationship where is a function of , which means writing it as = [something involving ].  Starting with the given equation, we can then subtract from both sides to get and then we can divide both sides by 6 and simplify to find   Having rewritten the formula as =, we can now express p as a function:     It is important to note that not every relationship can be expressed as a function with a formula.  Note the important feature of an equation written as a function is that the output value can be determined directly from the input by doing evaluations - no further solving is required. This allows the relationship to act as a machine that takes an input, processes it, and returns an output. Modern technology and computers rely on these functional relationships, since the evaluation of the function can be programmed into machines, whereas solving things is much more challenging.    Express the relationship as a function if possible.  If we try to solve for in this equation, we get        We end up with two outputs corresponding to the same input, so this relationship cannot be represented as a single function .    As with tables and graphs, it is common to evaluate and solve functions involving formulas. Evaluating will require replacing the input variable in the formula with the value provided and calculating. Solving will require replacing the output variable in the formula with the value provided and solving for the input(s) that would produce that output.    Given the function ,  a) Evaluate   b) Solve   a) “Evaluate ” means we want to find the output when the input is . We plug in the input value 2 into the formula wherever we see the input variable , then simplify     b) “Solve ” means we want to find the input that will give us an output of 1. We set the formula for equal to 1, and solve for the input. Starting with the given information: we can then substitute the original formula to get Then subtract 2 from each side to get and finally take the cube root of each side to get the solution   When solving an equation using formulas, you can check your answer by using your solution in the original equation to see if your calculated answer is correct.  We want to know if is true when . , which was the desired result.      Given the function ,  a) Evaluate   b) Solve   To evaluate we substitute the value 4 for the input variable in the given function. a)   b) Starting with , we substitute the original function to get This is quadratic, so we can rearrange the equation to get something equal to 0 by subtracting 3 from each side. So, This is factor-able, so we factor it By the zero-factor theorem since , either or (or both equal 0) and so we solve both equations for , finding from the first equation and from the second equation.  This gives us the solution: when or   We found two solutions in this case, which tells us this function is not one-to-one.     Given the function , a. Evaluate b. Solve      Basic Toolkit Functions  In this text, we will be exploring functions – the shapes of their graphs, their unique features, their equations, and how to solve problems with them. When learning to read, we start with the alphabet. When learning to do arithmetic, we start with numbers. When working with functions, it is similarly helpful to have a base set of elements to build from. We call these our ”toolkit of functions” – a set of basic named functions for which we know the graph, equation, and special features.  For these definitions we will use as the input variable and as the function output.   Toolkit Functions   .   Linear   Constant: where is a constant number    Identity:        Power   Quadratic:     Cubic:     Reciprocal:     Reciprocal Squared:     Square Root:     Cube Root:           You will see these toolkit functions, combinations of toolkit functions, their graphs and their transformations frequently throughout this book. In order to successfully follow along later in the book, it will be very helpful if you can recognize these toolkit functions and their features quickly by name, equation, graph and basic table values.  Not every important equation can be written as . An example of this is the equation of a circle. Recall the distance formula for the distance between two points: A circle with radius with center at can be described as all points a distance of from the center, so using the distance formula, , giving:   Equation of a circle   A circle with radius r with center has equation .      Graphs of the Toolkit Functions  The following graphs are the graphs of the toolkit functions, followed by the function definition.   Graph of the constant function    A horizontal line passing through the points negative 4 comma 2, negative 2 comma 2, 0 comma 2, 2 comma 2, and 4 comma 2.      Graph of    An increasing straight line passing through negative 1 comma negative 1, 0 comma 0 and 1 comma 1.      Graph of    A U-shaped graph decreasing to 0 comma 0 then increasing, passing through 1 comma 1.      Graph of    A graph that increases quickly, then flattens out at the origin, then increases quickly again.      Graph of    Starts at the origin, flattens out as it increases. Passes through 1 comma 1, 4 comma 2, and 9 comma 3.      Graph of    An increasing concave up curve that passes through negative 8 comma negative 2, negative 1 comma negative 1,0 comma 0 and changes to concave down at 0 comma 0 and goes through the point 1 comma and 8 comma 2.      Graph of    From the left the graph starts out flat just below 0. As x increases, y decreases slowly at first then more rapidly. As x approaches 0 from the left, the graph decreases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.      Graph of    Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.       Conclusions   Important Topics of this Section      Definition of a function    Input (independent variable)    Output (dependent variable)    Definition of a one-to-one function    Function notation    Descriptive variables    Functions in words, tables, graphs and formulas    Vertical line test    Horizontal line test    Evaluating a function at a specific input value    Solving a function given a specific output value    Toolkit Functions        [Checkpoint Answers:]   Yes: for each bank account, there would be one balance associated    No: there could be several bank accounts with the same balance    Yes it’s a function; No, it’s not one-to-one (several percents give the same letter grade)    When ,     There are two points where the output is 1: or     a. , b. . Square both sides to get , so        "
},
{
  "id": "Chapter1Section2-2-4",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Function.",
  "body": " Function   A rule for a relationship between an input, or independent, quantity and an output, or dependent, quantity in which each input value uniquely determines one output value. We say, “the output is a function of the input.”   "
},
{
  "id": "Chapter1Section2-2-5",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  In the height and age example above, is height a function of age? Is age a function of height?  In the height and age example above, it would be correct to say that height is a function of age, since each age uniquely determines a height. For example, on my 18th birthday, I had exactly one height of 69 inches.  However, age is not a function of height, since one height input might correspond with more than one output age. For example, for an input height of 70 inches, there is more than one output of age since I was 70 inches at the age of 20 and 21.   "
},
{
  "id": "Chapter1Section2-2-6",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-6",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  At a coffee shop, the menu consists of items and their prices. Is price a function of the item? Is the item a function of the price?  We could say that price is a function of the item, since each input of an item has one output of a price corresponding to it. We could not say that item is a function of price, since two items might have the same price.   "
},
{
  "id": "Chapter1Section2-2-7",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-7",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  In many classes the overall percentage you earn in the course corresponds to a decimal grade point. Is decimal grade a function of percentage? Is percentage a function of decimal grade?  For any percentage earned, there would be a decimal grade associated, so we could say that the decimal grade is a function of percentage. That is, if you input the percentage, your output would be a decimal grade. Percentage may or may not be a function of decimal grade, depending upon the teacher’s grading scheme. With some grading systems, there are a range of percentages that correspond to the same decimal grade.   "
},
{
  "id": "Chapter1Section2-2-8",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-8",
  "type": "Definition",
  "number": "1.1.5",
  "title": "One-to-One Function.",
  "body": " One-to-One Function   Sometimes in a relationship each input corresponds to exactly one output, and every output corresponds to exactly one input. We call this kind of relationship a one-to-one function.   "
},
{
  "id": "Chapter1Section2-2-10",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-10",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": " Let’s consider bank account information.  Is your balance a function of your bank account number? (If you input a bank account number does it make sense that the output is your balance?)  "
},
{
  "id": "Chapter1Section2-2-12",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-2-12",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": " Is your bank account number a function of your balance? (if you input a balance does it make sense that the output is your bank account number?)  "
},
{
  "id": "Chapter1Section2-3-8",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-3-8",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Function Notation.",
  "body": " Function Notation   The notation defines a function named . This would be read “output is of input”   "
},
{
  "id": "Chapter1Section2-3-9",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-3-9",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Introduce function notation to represent a function that takes as input the name of a month and gives as output the number of days in that month.  The number of days in a month is a function of the name of the month, so if we name the function , we could write “ ” or .  For example, , since March has 31 days. The notation reminds us that the number of days, (the output) is dependent on the name of the month, (the input)   "
},
{
  "id": "Chapter1Section2-3-10",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-3-10",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  A function gives the number of police officers, , in a town in year . What does tell us?  When we read , we see the input quantity is 2005, which is a value for the input quantity of the function, the year ( ). The output value is 300, the number of police officers ( ), a value for the output quantity. Remember . This tells us that in the year 2005 there were 300 police officers in the town.   "
},
{
  "id": "Chapter1Section2-4-10",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-4-10",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Which of these tables define a function (if any)? Are any of them one-to-one?        Input  Output    2  1    5  3    8  6          Input  Output    -3  5    0  1    4  5          Input  Output    1  0    5  2    5  4    The first and second tables define functions. In both, each input corresponds to exactly one output. The third table does not define a function since the input value of 5 corresponds with two different output values.  Only the first table is one-to-one; it is both a function, and each output corresponds to exactly one input. Although table 2 is a function, because each input corresponds to exactly one output, each output does not correspond to exactly one input so this function is not one-to-one. Table 3 is not even a function and so we don’t even need to consider if it is a one-to-one function.   "
},
{
  "id": "Chapter1Section2-4-11",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-4-11",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "",
  "body": " If each percentage earned translated to one letter grade, would this be a function? Is it one-to-one?  "
},
{
  "id": "Chapter1Section2-5-4",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-5-4",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  Using the table shown, where :                   1  2  3  4  5       8  6  7  6  8    a) Evaluate   Evaluating (read: “ of 3”) means that we need to determine the output value, , of the function given the input value of . Looking at the table, we see the output corresponding to is , allowing us to conclude .  b) Solve   Solving means we need to determine what input values, , produce an output value of 6. Looking at the table we see there are two solutions: and .  When we input 2 into the function , our output is   When we input 4 into the function , our output is also    "
},
{
  "id": "Chapter1Section2-5-5",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-5-5",
  "type": "Checkpoint",
  "number": "1.1.14",
  "title": "",
  "body": " Using the function in Example 7, evaluate .  "
},
{
  "id": "coordinate-plane",
  "level": "2",
  "url": "Chapter1Section2.html#coordinate-plane",
  "type": "Figure",
  "number": "1.1.15",
  "title": "",
  "body": " The xy coordinate plane.    A coordinate plane grid with the horizontal axis labeled with the variable x and the vertical axis labeled with the variable y.    "
},
{
  "id": "Chapter1Section2-6-5",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-6-5",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Which of these graphs defines a function ? Which of these graphs defines a one-to-one function?   Graph 1    Graph of a smooth curve that increases to negative 1 comma 3, decreases to 1 comma negative 3, then increases.      Graph 2    Graph of a decreasing straight line.      Graph 3    Graph of a circle with radius 3 centered at the origin.     Looking at the three graphs above, the first two define a function , since for each input value along the horizontal axis there is exactly one output value corresponding, determined by the -value of the graph. The 3rd graph does not define a function since some input values, such as , correspond with more than one output value.  Graph 1 is not a one-to-one function. For example, the output value 3 has two corresponding input values, -1 and 2.3  Graph 2 is a one-to-one function; each input corresponds to exactly one output, and every output corresponds to exactly one input.  Graph 3 is not even a function so there is no reason to even check to see if it is a one-to-one function.   "
},
{
  "id": "Chapter1Section2-6-6",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-6-6",
  "type": "Definition",
  "number": "1.1.20",
  "title": "Vertical line test.",
  "body": " Vertical line test   The vertical line test is a handy way to think about whether a graph defines the vertical output as a function of the horizontal input. Imagine drawing vertical lines through the graph. If any vertical line would cross the graph more than once, then the graph does not define only one vertical output for each horizontal input.   "
},
{
  "id": "Chapter1Section2-6-7",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-6-7",
  "type": "Definition",
  "number": "1.1.21",
  "title": "Horizontal Line Test.",
  "body": " Horizontal Line Test   Once you have determined that a graph defines a function, an easy way to determine if it is a one-to-one function is to use the horizontal line test. Draw horizontal lines through the graph. If any horizontal line crosses the graph more than once, then the graph does not define a one-to-one function.   "
},
{
  "id": "Chapter1Section2-6-9",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-6-9",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Given the graph of f(x),  a) Evaluate   b) Solve    Graph of    A U-shaped graph passing through negative 1 comma 4, 0 comma 1, 1 comma 0, 2 comma 1, and 3 comma 4.     a) To evaluate , we find the input of on the horizontal axis. Moving up to the graph gives the point , giving an output of . .  b) To solve , we find the value 4 on the vertical axis because if then 4 is the output. Moving horizontally across the graph gives two points with the output of 4: and . These give the two solutions to : or .  This means and , or when the input is -1 or 3, the output is 4.   "
},
{
  "id": "Chapter1Section2-6-11",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-6-11",
  "type": "Checkpoint",
  "number": "1.1.24",
  "title": "",
  "body": " Using the graph from example 9, solve .  "
},
{
  "id": "Chapter1Section2-7-3",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-7-3",
  "type": "Example",
  "number": "1.1.25",
  "title": "",
  "body": "  Express the relationship as a function if possible.  To express the relationship in this form, we need to be able to write the relationship where is a function of , which means writing it as = [something involving ].  Starting with the given equation, we can then subtract from both sides to get and then we can divide both sides by 6 and simplify to find   Having rewritten the formula as =, we can now express p as a function:    "
},
{
  "id": "Chapter1Section2-7-6",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-7-6",
  "type": "Example",
  "number": "1.1.26",
  "title": "",
  "body": "  Express the relationship as a function if possible.  If we try to solve for in this equation, we get        We end up with two outputs corresponding to the same input, so this relationship cannot be represented as a single function .   "
},
{
  "id": "Chapter1Section2-7-8",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-7-8",
  "type": "Example",
  "number": "1.1.27",
  "title": "",
  "body": "  Given the function ,  a) Evaluate   b) Solve   a) “Evaluate ” means we want to find the output when the input is . We plug in the input value 2 into the formula wherever we see the input variable , then simplify     b) “Solve ” means we want to find the input that will give us an output of 1. We set the formula for equal to 1, and solve for the input. Starting with the given information: we can then substitute the original formula to get Then subtract 2 from each side to get and finally take the cube root of each side to get the solution   When solving an equation using formulas, you can check your answer by using your solution in the original equation to see if your calculated answer is correct.  We want to know if is true when . , which was the desired result.   "
},
{
  "id": "Chapter1Section2-7-9",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-7-9",
  "type": "Example",
  "number": "1.1.28",
  "title": "",
  "body": "  Given the function ,  a) Evaluate   b) Solve   To evaluate we substitute the value 4 for the input variable in the given function. a)   b) Starting with , we substitute the original function to get This is quadratic, so we can rearrange the equation to get something equal to 0 by subtracting 3 from each side. So, This is factor-able, so we factor it By the zero-factor theorem since , either or (or both equal 0) and so we solve both equations for , finding from the first equation and from the second equation.  This gives us the solution: when or   We found two solutions in this case, which tells us this function is not one-to-one.   "
},
{
  "id": "Chapter1Section2-7-10",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-7-10",
  "type": "Checkpoint",
  "number": "1.1.29",
  "title": "",
  "body": " Given the function , a. Evaluate b. Solve   "
},
{
  "id": "Chapter1Section2-8-4",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-8-4",
  "type": "Definition",
  "number": "1.1.30",
  "title": "Toolkit Functions.",
  "body": " Toolkit Functions   .   Linear   Constant: where is a constant number    Identity:        Power   Quadratic:     Cubic:     Reciprocal:     Reciprocal Squared:     Square Root:     Cube Root:          "
},
{
  "id": "Chapter1Section2-8-7",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-8-7",
  "type": "Definition",
  "number": "1.1.31",
  "title": "Equation of a circle.",
  "body": " Equation of a circle   A circle with radius r with center has equation .   "
},
{
  "id": "constant",
  "level": "2",
  "url": "Chapter1Section2.html#constant",
  "type": "Figure",
  "number": "1.1.32",
  "title": "",
  "body": " Graph of the constant function    A horizontal line passing through the points negative 4 comma 2, negative 2 comma 2, 0 comma 2, 2 comma 2, and 4 comma 2.    "
},
{
  "id": "yequalsx",
  "level": "2",
  "url": "Chapter1Section2.html#yequalsx",
  "type": "Figure",
  "number": "1.1.33",
  "title": "",
  "body": " Graph of    An increasing straight line passing through negative 1 comma negative 1, 0 comma 0 and 1 comma 1.    "
},
{
  "id": "squared",
  "level": "2",
  "url": "Chapter1Section2.html#squared",
  "type": "Figure",
  "number": "1.1.34",
  "title": "",
  "body": " Graph of    A U-shaped graph decreasing to 0 comma 0 then increasing, passing through 1 comma 1.    "
},
{
  "id": "cubed",
  "level": "2",
  "url": "Chapter1Section2.html#cubed",
  "type": "Figure",
  "number": "1.1.35",
  "title": "",
  "body": " Graph of    A graph that increases quickly, then flattens out at the origin, then increases quickly again.    "
},
{
  "id": "root",
  "level": "2",
  "url": "Chapter1Section2.html#root",
  "type": "Figure",
  "number": "1.1.36",
  "title": "",
  "body": " Graph of    Starts at the origin, flattens out as it increases. Passes through 1 comma 1, 4 comma 2, and 9 comma 3.    "
},
{
  "id": "cuberoot",
  "level": "2",
  "url": "Chapter1Section2.html#cuberoot",
  "type": "Figure",
  "number": "1.1.37",
  "title": "",
  "body": " Graph of    An increasing concave up curve that passes through negative 8 comma negative 2, negative 1 comma negative 1,0 comma 0 and changes to concave down at 0 comma 0 and goes through the point 1 comma and 8 comma 2.    "
},
{
  "id": "reciprocal",
  "level": "2",
  "url": "Chapter1Section2.html#reciprocal",
  "type": "Figure",
  "number": "1.1.38",
  "title": "",
  "body": " Graph of    From the left the graph starts out flat just below 0. As x increases, y decreases slowly at first then more rapidly. As x approaches 0 from the left, the graph decreases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.    "
},
{
  "id": "reciprocal-squared",
  "level": "2",
  "url": "Chapter1Section2.html#reciprocal-squared",
  "type": "Figure",
  "number": "1.1.39",
  "title": "",
  "body": " Graph of    Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.    "
},
{
  "id": "Chapter1Section2-10-2",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-10-2",
  "type": "Definition",
  "number": "1.1.40",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Definition of a function    Input (independent variable)    Output (dependent variable)    Definition of a one-to-one function    Function notation    Descriptive variables    Functions in words, tables, graphs and formulas    Vertical line test    Horizontal line test    Evaluating a function at a specific input value    Solving a function given a specific output value    Toolkit Functions      "
},
{
  "id": "Chapter1Section2-10-3",
  "level": "2",
  "url": "Chapter1Section2.html#Chapter1Section2-10-3",
  "type": "Checkpoint",
  "number": "1.1.41",
  "title": "",
  "body": " [Checkpoint Answers:]   Yes: for each bank account, there would be one balance associated    No: there could be several bank accounts with the same balance    Yes it’s a function; No, it’s not one-to-one (several percents give the same letter grade)    When ,     There are two points where the output is 1: or     a. , b. . Square both sides to get , so      "
},
{
  "id": "Chapter1Section3",
  "level": "1",
  "url": "Chapter1Section3.html",
  "type": "Section",
  "number": "1.2",
  "title": "Domain and Range",
  "body": " Domain and Range   Definitions  One of our main goals in mathematics is to model the real world with mathematical functions. In doing so, it is important to keep in mind the limitations of those models we create.  This table shows a relationship between circumference and height of a tree as it grows.                Circumference,   1.7  2.5  5.5  8.2  13.7    Height,   24.5  31  45.2  54.6  92.1    While there is a strong relationship between the two, it would certainly be ridiculous to talk about a tree with a circumference of -3 feet, or a height of 3000 feet. When we identify limitations on the inputs and outputs of a function, we are determining the domain and range of the function.   Domain and Range   Domain: The set of possible or acceptable input values to a function Range: The set of possible or acceptable output values of a function      Using the tree table above, determine a reasonable domain and range.  We could combine the data provided with our own experiences and reason to approximate the domain and range of the function . For the domain, possible values for the input circumference , it doesn’t make sense to have negative values, so . We could make an educated guess at a maximum reasonable value, or look up that the maximum circumference measured is about 119 feet . With this information, we would say a reasonable domain is feet.  Similarly for the range, it doesn’t make sense to have negative heights, and the maximum height of a tree could be looked up to be 379 feet, so a reasonable range is feet.      When sending a letter through the United States Postal Service, the price depends upon the weight of the letter, as shown in the table below. Determine the domain and range.   Letter Prices        Weight not over  Price    1 ounce  $0.58    2 ounces  $0.78    3 ounces  $0.98    3.5 ounces  $1.18     Suppose we notate Weight by and Price by , and set up a function named , where Price, is a function of Weight, . .  Since acceptable weights are 3.5 ounces or less, and negative weights don’t make sense, the domain would be . Technically 0 could be included in the domain, but logically it would mean we are mailing nothing, so it doesn’t hurt to leave it out.  Since possible prices are from a limited set of values, we can only define the range of this function by listing the possible values. The range is = $0.58, $0.78, $0.98, or $1.18.     The population of a small town in the year 1960 was 100 people. Since then, the population has grown to 1400 people reported during the 2010 census. Choose descriptive variables for your input and output and use interval notation to write the domain and range.     Notation  In the previous examples, we used inequalities to describe the domain and range of the functions. This is one way to describe intervals of input and output values, but is not the only way. Let us take a moment to discuss notation for domain and range.  Using inequalities, such as , , and imply that we are interested in all values between the low and high values, including the high values in these examples.  However, occasionally we are interested in a specific list of numbers like the range for the price to send letters, = $0.58, $0.78, $0.98, or $1.18. These numbers represent a set of specific values: .  Representing values as a set, or giving instructions on how a set is built, leads us to another type of notation to describe the domain and range.  Suppose we want to describe the values for a variable that are 10 or greater, but less than 30. In inequalities, we would write .  When describing domains and ranges, we sometimes extend this into set-builder notation, which would look like this: . The curly brackets {} are read as “the set of”, and the vertical bar | is read as “such that”, so altogether we would read as “the set of -values such that 10 is less than or equal to and is less than 30.”  When describing ranges in set-builder notation, we could similarly write something like , or if the output had its own variable, we could use it. So for our tree height example above, we could write for the range . In set-builder notation, if a domain or range is not limited, we could write , or , read as “the set of -values such that is an element of the set of real numbers.  A more compact alternative to set-builder notation is interval notation, in which intervals of values are referred to by the starting and ending values. Curved parentheses are used for “strictly less than,” and square brackets are used for “less than or equal to.” Since infinity is not a number, we can’t include it in the interval, so we always use curved parentheses with and . The table below will help you see how inequalities correspond to set-builder notation and interval notation:          Inequality  Set Builder Notation  Interval Notation                                                           all real numbers          To combine two intervals together, using inequalities or set-builder notation we can use the word “or”. In interval notation, we use the union symbol, , to combine two unconnected intervals together.    Describe the intervals of values shown on the line graph below using set builder and interval notations.     A number line from -2 to 7 with two shaded sections. There are closed dots at 1 and 3 with the number line between shaded. There is an open dot at 5 with the number line shaded to the right.     To describe the values, , that lie in the intervals shown above we would say, “ is a real number greater than or equal to 1 and less than or equal to 3, or a real number greater than 5.”  As an inequality it is: or In set builder notation: In interval notation:     Remember when writing or reading interval notation: Using a square bracket [ means the start value is included in the set. Using a parenthesis ( means the start value is not included in the set   Given the following interval, write its meaning in words, set builder notation, and interval notation.     A number line from -5 to 5 with two shaded sections. There is a closed dot at -2 with the number line to the left shaded. There is a closed dot at -1 and open dot at 3 with the number line between shaded.        Domain and Range from Graphs  We can also talk about domain and range based on graphs. Since domain refers to the set of possible input values, the domain of a graph consists of all the input values shown on the graph. Remember that input values are almost always shown along the horizontal axis of the graph. Likewise, since range is the set of possible output values, the range of a graph we can see from the possible values along the vertical axis of the graph.  Be careful – if the graph continues beyond the window on which we can see the graph, the domain and range might be larger than the values we can see.    Determine the domain and range of the graph below.     A graph labeled Alaska Crude Oil Production in thousands of barrels per day, with the horizontal axis showing years from 1975 to 2008, and the vertical axis from 0 to 2200. The graph starts in 1975 around 200, drops a little to about 180, increases up to about 2010 in 1988, then drops to about 700 in 2008.     In the graph above, the input quantity along the horizontal axis appears to be “year”, which we could notate with the variable . The output is “thousands of barrels of oil per day”, which we might notate with the variable , for barrels. The graph would likely continue to the left and right beyond what is shown, but based on the portion of the graph that is shown to us, we can determine the domain is , and the range is approximately .  In interval notation, the domain would be and the range would be about . For the range, we have to approximate the smallest and largest outputs since they don’t fall exactly on the grid lines.    Remember that, as in the previous example, and are not always the input and output variables. Using descriptive variables is an important tool to remembering the context of the problem.   Given the graph below write the domain and range in interval notation     A graph labeled World Population Increase. The vertical axis is labeled population increase in millions, and the horizontal axis is in years. The graph starts around 45 in 1952, increases for a while, then drops to 40 in 1960. It increases and decreases a bit, reaching a high of 88 in 1989. The graph ends at 76 in 2002.        Domains and Ranges of the Toolkit functions  We will now return to our set of toolkit functions to note the domain and range of each.    Constant Function:   The domain here is not restricted; can be anything. When this is the case, we say the domain is all real numbers. The outputs are limited to the constant value of the function.   Domain:     Range:   Since there is only one output value, we list it by itself in square brackets.       Identity Function:    Domain:     Range:        Quadratic Function:    Domain:     Range:   Multiplying a negative or positive number by itself can only yield a positive output.       Cubic Function:    Domain:     Range:        Reciprocal:    Domain:   We cannot divide by 0 so we must exclude 0 from the domain.    Range:   One divided by any value can never be 0, so the range will not include 0.       Reciprocal squared:    Domain:   We cannot divide by 0 so we must exclude 0 from the domain.    Range:   Since the denominator will always be positive, and 1 divided by a positive number will be positive, the range will always be positive.       Cube Root:    Domain:     Range:        Square Root:    Domain:   When dealing with the set of real numbers we cannot take the square root of a negative number so the domain is limited to 0 or greater.    Range:          Find the domain of each function:  a)   b)   a) Since we cannot take the square root of a negative number, we need the inside of the square root to be non-negative. when . The domain of is .  b) We cannot divide by zero, so we need the denominator to be non-zero. when , so we must exclude 2 from the domain. The domain of is .      Conclusions   Important Topics of this Section      Definition of domain    Definition of range    Inequalities    Interval notation    Set builder notation    Domain and Range from graphs    Domain and Range of toolkit functions        [Exercise Answers]   Domain: = years , Range: = population,     a. Values that are less than or equal to -2, or values that are greater than or equal to -1 and less than 3  b.   c.     Domain: = years, , Range: = population in millions,        "
},
{
  "id": "Chapter1Section3-2-6",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-2-6",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Domain and Range.",
  "body": " Domain and Range   Domain: The set of possible or acceptable input values to a function Range: The set of possible or acceptable output values of a function   "
},
{
  "id": "Chapter1Section3-2-7",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-2-7",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Using the tree table above, determine a reasonable domain and range.  We could combine the data provided with our own experiences and reason to approximate the domain and range of the function . For the domain, possible values for the input circumference , it doesn’t make sense to have negative values, so . We could make an educated guess at a maximum reasonable value, or look up that the maximum circumference measured is about 119 feet . With this information, we would say a reasonable domain is feet.  Similarly for the range, it doesn’t make sense to have negative heights, and the maximum height of a tree could be looked up to be 379 feet, so a reasonable range is feet.   "
},
{
  "id": "Chapter1Section3-2-8",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-2-8",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  When sending a letter through the United States Postal Service, the price depends upon the weight of the letter, as shown in the table below. Determine the domain and range.   Letter Prices        Weight not over  Price    1 ounce  $0.58    2 ounces  $0.78    3 ounces  $0.98    3.5 ounces  $1.18     Suppose we notate Weight by and Price by , and set up a function named , where Price, is a function of Weight, . .  Since acceptable weights are 3.5 ounces or less, and negative weights don’t make sense, the domain would be . Technically 0 could be included in the domain, but logically it would mean we are mailing nothing, so it doesn’t hurt to leave it out.  Since possible prices are from a limited set of values, we can only define the range of this function by listing the possible values. The range is = $0.58, $0.78, $0.98, or $1.18.   "
},
{
  "id": "Chapter1Section3-2-9",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-2-9",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " The population of a small town in the year 1960 was 100 people. Since then, the population has grown to 1400 people reported during the 2010 census. Choose descriptive variables for your input and output and use interval notation to write the domain and range.  "
},
{
  "id": "Chapter1Section3-3-12",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-3-12",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Describe the intervals of values shown on the line graph below using set builder and interval notations.     A number line from -2 to 7 with two shaded sections. There are closed dots at 1 and 3 with the number line between shaded. There is an open dot at 5 with the number line shaded to the right.     To describe the values, , that lie in the intervals shown above we would say, “ is a real number greater than or equal to 1 and less than or equal to 3, or a real number greater than 5.”  As an inequality it is: or In set builder notation: In interval notation:    "
},
{
  "id": "Chapter1Section3-3-14",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-3-14",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Given the following interval, write its meaning in words, set builder notation, and interval notation.     A number line from -5 to 5 with two shaded sections. There is a closed dot at -2 with the number line to the left shaded. There is a closed dot at -1 and open dot at 3 with the number line between shaded.     "
},
{
  "id": "Chapter1Section3-4-4",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-4-4",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Determine the domain and range of the graph below.     A graph labeled Alaska Crude Oil Production in thousands of barrels per day, with the horizontal axis showing years from 1975 to 2008, and the vertical axis from 0 to 2200. The graph starts in 1975 around 200, drops a little to about 180, increases up to about 2010 in 1988, then drops to about 700 in 2008.     In the graph above, the input quantity along the horizontal axis appears to be “year”, which we could notate with the variable . The output is “thousands of barrels of oil per day”, which we might notate with the variable , for barrels. The graph would likely continue to the left and right beyond what is shown, but based on the portion of the graph that is shown to us, we can determine the domain is , and the range is approximately .  In interval notation, the domain would be and the range would be about . For the range, we have to approximate the smallest and largest outputs since they don’t fall exactly on the grid lines.   "
},
{
  "id": "Chapter1Section3-4-6",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-4-6",
  "type": "Checkpoint",
  "number": "1.2.12",
  "title": "",
  "body": " Given the graph below write the domain and range in interval notation     A graph labeled World Population Increase. The vertical axis is labeled population increase in millions, and the horizontal axis is in years. The graph starts around 45 in 1952, increases for a while, then drops to 40 in 1960. It increases and decreases a bit, reaching a high of 88 in 1989. The graph ends at 76 in 2002.     "
},
{
  "id": "Chapter1Section3-5-4",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-5-4",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  Find the domain of each function:  a)   b)   a) Since we cannot take the square root of a negative number, we need the inside of the square root to be non-negative. when . The domain of is .  b) We cannot divide by zero, so we need the denominator to be non-zero. when , so we must exclude 2 from the domain. The domain of is .   "
},
{
  "id": "Chapter1Section3-6-2",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-6-2",
  "type": "Example",
  "number": "1.2.15",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Definition of domain    Definition of range    Inequalities    Interval notation    Set builder notation    Domain and Range from graphs    Domain and Range of toolkit functions      "
},
{
  "id": "Chapter1Section3-6-3",
  "level": "2",
  "url": "Chapter1Section3.html#Chapter1Section3-6-3",
  "type": "Checkpoint",
  "number": "1.2.16",
  "title": "",
  "body": " [Exercise Answers]   Domain: = years , Range: = population,     a. Values that are less than or equal to -2, or values that are greater than or equal to -1 and less than 3  b.   c.     Domain: = years, , Range: = population in millions,      "
},
{
  "id": "Chapter1Section4",
  "level": "1",
  "url": "Chapter1Section4.html",
  "type": "Section",
  "number": "1.3",
  "title": "Rates of Change",
  "body": " Rates of Change   Definitions  Since functions represent how an output quantity varies with an input quantity, it is natural to ask about the rate at which the values of the function are changing.  For example, the function below gives the average cost , in dollars, of a gallon of gasoline years after 2000.                         2  3  4  5  6  7  8  9       1.47  1.69  1.94  2.30  2.51  2.64  3.01  2.14    If we were interested in how the gas prices had changed between 2002 and 2009, we could compute that the cost per gallon had increased from $1.47 to $2.14, an increase of $0.67. While this is interesting, it might be more useful to look at how much the price changed per year. You are probably noticing that the price didn’t change the same amount each year, so we would be finding the average rate of change over a specified amount of time.  The gas price increased by $0.67 from 2002 to 2009, over 7 years, for an average of $0.67\/7 years $0.096 per year. On average, the price of gas increased by about 9.6 cents each year.   Rate of Change   A rate of change describes how the output quantity changes in relation to the input quantity. The units on a rate of change are “output units per input unit” or ” ”.    Some other examples of rates of change would be quantities like:    A population of rats increases by 40 rats per week.    A barista earns $9 per hour (dollars per hour).    A farmer plants 60,000 onions per acre.    A car can drive 27 miles per gallon of gasoline.    A population of grey whales decreases by 8 whales per year.    The amount of money in your college account decreases by $8,000 per semester.     Average Rate of Change   The average rate of change between two input values is the total change of the function values (output values) divided by the change in the input values. If we are given two pairs of input and output values and , then we compute the average rate of change from the first point to the second point with the following calculation:       Using the cost-of-gas function from earlier, find the average rate of change between 2007 and 2009  From the table, in 2007 the cost of gas was $2.64. In 2009 the cost was $2.14.  The input (years) has changed by 2. The output has changed by $2.14 - $2.64 = -$0.50. The average rate of change is then dollars per year.     Using the same cost-of-gas function, find the average rate of change between 2003 and 2008.   Notice that in the last example the change of output was negative since the output value of the function had decreased. Correspondingly, the average rate of change is negative.    Given the function g(t) shown here, find the average rate of change on the interval .     A U-shaped graph passing through 0 comma 1, 1 comma 0, 2 comma 1, and 3 comma 4     At , the graph shows . At , the graph shows .  The output has changed by 3 while the input has changed by 3, giving an average rate of change of:       On a road trip, after picking up your friend who lives 10 miles away, you decide to record your distance from home over time. Find your average speed over the first 6 hours.                       (hours)  0  1  2  3  4  5  6  7     (miles)  10  55  90  153  214  240  292  300    Here, your average speed is the average rate of change. You traveled 282 miles in 6 hours, for an average speed of miles per hour.    We can more formally state the average rate of change calculation using function notation.   Average Rate of Change using Function Notation   Given a function , the average rate of change on the interval is       Compute the average rate of change of on the interval .  We can start by computing the function values at each endpoint of the interval   ,   .  Now computing the average rate of change      Find the average rate of change of on the interval .     The magnetic force , measured in Newtons, between two magnets is related to the distance between the magnets , in centimeters, by the formula . Find the average rate of change of force if the distance between the magnets is increased from 2 cm to 6 cm.  We are computing the average rate of change of on the interval .   Evaluating the function, we get:     This tells us the magnetic force decreases, on average, by Newtons per centimeter over this interval.      Find the average rate of change of on the interval . Your answer will be an expression involving .  Using the average rate of change formula   This result tells us the average rate of change between and any other point . For example, on the interval , the average rate of change would be .     Find the average rate of change of on the interval .     Graphical Behavior of Functions  As part of exploring how functions change, it is interesting to explore the graphical behavior of functions.   Increasing\/Decreasing   A function is increasing on an interval if the function values increase as the inputs increase. More formally, a function is increasing if for any two input values and in the interval with . The average rate of change of an increasing function is positive.  A function is decreasing on an interval if the function values decrease as the inputs increase. More formally, a function is decreasing if for any two input values and in the interval with . The average rate of change of a decreasing function is negative.      Given the function p(t) graphed here, on what intervals does the function appear to be increasing?     A graph passing through the points 0 comma 3, 1 comma negative 1, 3 comma 1, 4 comma 0.7 and 5 comma 3.5     The function appears to be increasing from to , and from on.  In interval notation, we would say the function appears to be increasing on the interval and the interval , or .    Notice in the last example that we used open intervals (intervals that don’t include the endpoints) since the function is neither increasing nor decreasing at .    Behaviors of the Toolkit Functions  We will now return to our toolkit functions and discuss their graphical behavior.        Function  Increasing\/Decreasing        Constant Function:   Neither increasing or decreasing        Identity Function:   Increasing on         Quadratic Function:   Decreasing on , Increasing on         Cubic Function:   Increasing on         Reciprocal:   Decreasing on         Reciprocal Squared:   Increasing on , Decreasing on         Cube Root:   Increasing on         Square Root:   Increasing on               Conclusions   Important Topics of This Section      Rate of Change    Average Rate of Change    Calculating Average Rate of Change using Function Notation    Increasing\/Decreasing Functions        [Exercise Answers]    dollars per year.    Average rate of change             "
},
{
  "id": "Chapter1Section4-2-7",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-7",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Rate of Change.",
  "body": " Rate of Change   A rate of change describes how the output quantity changes in relation to the input quantity. The units on a rate of change are “output units per input unit” or ” ”.   "
},
{
  "id": "Chapter1Section4-2-10",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-10",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Average Rate of Change.",
  "body": " Average Rate of Change   The average rate of change between two input values is the total change of the function values (output values) divided by the change in the input values. If we are given two pairs of input and output values and , then we compute the average rate of change from the first point to the second point with the following calculation:    "
},
{
  "id": "Chapter1Section4-2-11",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-11",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Using the cost-of-gas function from earlier, find the average rate of change between 2007 and 2009  From the table, in 2007 the cost of gas was $2.64. In 2009 the cost was $2.14.  The input (years) has changed by 2. The output has changed by $2.14 - $2.64 = -$0.50. The average rate of change is then dollars per year.   "
},
{
  "id": "Chapter1Section4-2-12",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-12",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Using the same cost-of-gas function, find the average rate of change between 2003 and 2008.  "
},
{
  "id": "Chapter1Section4-2-14",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-14",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Given the function g(t) shown here, find the average rate of change on the interval .     A U-shaped graph passing through 0 comma 1, 1 comma 0, 2 comma 1, and 3 comma 4     At , the graph shows . At , the graph shows .  The output has changed by 3 while the input has changed by 3, giving an average rate of change of:    "
},
{
  "id": "Chapter1Section4-2-15",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-15",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  On a road trip, after picking up your friend who lives 10 miles away, you decide to record your distance from home over time. Find your average speed over the first 6 hours.                       (hours)  0  1  2  3  4  5  6  7     (miles)  10  55  90  153  214  240  292  300    Here, your average speed is the average rate of change. You traveled 282 miles in 6 hours, for an average speed of miles per hour.   "
},
{
  "id": "Chapter1Section4-2-17",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-17",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Average Rate of Change using Function Notation.",
  "body": " Average Rate of Change using Function Notation   Given a function , the average rate of change on the interval is    "
},
{
  "id": "Chapter1Section4-2-18",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-18",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Compute the average rate of change of on the interval .  We can start by computing the function values at each endpoint of the interval   ,   .  Now computing the average rate of change    "
},
{
  "id": "Chapter1Section4-2-19",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-19",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "",
  "body": " Find the average rate of change of on the interval .  "
},
{
  "id": "Chapter1Section4-2-20",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-20",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  The magnetic force , measured in Newtons, between two magnets is related to the distance between the magnets , in centimeters, by the formula . Find the average rate of change of force if the distance between the magnets is increased from 2 cm to 6 cm.  We are computing the average rate of change of on the interval .   Evaluating the function, we get:     This tells us the magnetic force decreases, on average, by Newtons per centimeter over this interval.   "
},
{
  "id": "Chapter1Section4-2-21",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-21",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Find the average rate of change of on the interval . Your answer will be an expression involving .  Using the average rate of change formula   This result tells us the average rate of change between and any other point . For example, on the interval , the average rate of change would be .   "
},
{
  "id": "Chapter1Section4-2-22",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-2-22",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "",
  "body": " Find the average rate of change of on the interval .  "
},
{
  "id": "Chapter1Section4-3-3",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-3-3",
  "type": "Definition",
  "number": "1.3.14",
  "title": "Increasing\/Decreasing.",
  "body": " Increasing\/Decreasing   A function is increasing on an interval if the function values increase as the inputs increase. More formally, a function is increasing if for any two input values and in the interval with . The average rate of change of an increasing function is positive.  A function is decreasing on an interval if the function values decrease as the inputs increase. More formally, a function is decreasing if for any two input values and in the interval with . The average rate of change of a decreasing function is negative.   "
},
{
  "id": "Chapter1Section4-3-4",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-3-4",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Given the function p(t) graphed here, on what intervals does the function appear to be increasing?     A graph passing through the points 0 comma 3, 1 comma negative 1, 3 comma 1, 4 comma 0.7 and 5 comma 3.5     The function appears to be increasing from to , and from on.  In interval notation, we would say the function appears to be increasing on the interval and the interval , or .   "
},
{
  "id": "Chapter1Section4-5-2",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-5-2",
  "type": "Example",
  "number": "1.3.17",
  "title": "Important Topics of This Section.",
  "body": " Important Topics of This Section      Rate of Change    Average Rate of Change    Calculating Average Rate of Change using Function Notation    Increasing\/Decreasing Functions      "
},
{
  "id": "Chapter1Section4-5-3",
  "level": "2",
  "url": "Chapter1Section4.html#Chapter1Section4-5-3",
  "type": "Checkpoint",
  "number": "1.3.18",
  "title": "",
  "body": " [Exercise Answers]    dollars per year.    Average rate of change           "
},
{
  "id": "Chapter1Section5",
  "level": "1",
  "url": "Chapter1Section5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Composition",
  "body": " Composition   Definitions  Suppose we wanted to calculate how much it costs to heat a house on a particular day of the year. The cost to heat a house will depend on the average daily temperature, and the average daily temperature depends on the particular day of the year. Notice how we have just defined two relationships: The temperature depends on the day, and the cost depends on the temperature. Using descriptive variables, we can notate these two functions.  The first function, , gives the cost of heating a house when the average daily temperature is degrees Celsius, and the second, , gives the average daily temperature on day of the year in some city. If we wanted to determine the cost of heating the house on the 5th day of the year, we could do this by linking our two functions together, an idea called composition of functions. Using the function , we could evaluate to determine the average daily temperature on the 5th day of the year. We could then use that temperature as the input to the function to find the cost to heat the house on the 5th day of the year: .   Composition of Functions   When the output of one function is used as the input of another, we call the entire operation a composition of functions. We write and read this as “ of of ” or “ composed with at ”.  An alternate notation for composition uses the composition operator:    is read “ of of ” or “ composed with at ”, just like . We could refer to the name of this new function as .      Suppose gives the number of calories burned doing sit-ups, and gives the number of sit-ups a person can do in minutes. Interpret .  When we are asked to interpret, we are being asked to explain the meaning of the expression in words. The inside expression in the composition is . Since the input to the function is time, the 3 is representing 3 minutes, and is the number of sit-ups that can be done in 3 minutes. Taking this output and using it as the input to the function will gives us the calories that can be burned by the number of sit-ups that can be done in 3 minutes.    Note that it is no context involved in the scenario, it is not important that the same variable be used for the output of the inside function and the input to the outside function. However, it is essential that if we are given context, then the units on the output of the inside function match the units on the input to the outside function if the units are specified.    Suppose gives miles that can be driven in hours, and gives the gallons of gas used in driving miles. Which of these expressions is meaningful: or ?  The expression takes miles as the input and outputs a number of gallons. The function is expecting a number of hours as the input; trying to give it a number of gallons as input does not make sense. Remember the units must match, and number of gallons does not match number of hours, so the expression is meaningless.  The expression takes hours as input and outputs a number of miles driven. The function is expecting a number of miles as the input, so giving the output of the function (miles driven) as an input value for , where gallons of gas depend on miles driven, does make sense. The expression makes sense and will give the number of gallons of gas used, driving a certain number of miles, , in hours.     In a department store you see a sign that says 50% off clearance merchandise, so final cost depends on the clearance price, , according to the function . Clearance price, , depends on the original discount, , given to the clearance item, . Interpret .     Composition of Functions using Tables and Graphs  When working with functions given as tables and graphs, we can look up values for the functions using a provided table or graph, as discussed in section 1.2. We start evaluation from the provided input, and first evaluate the inside function. We can then use the output of the inside function as the input to the outside function. To remember this, always work from the inside out, as if we are following the order of operations.    Using the tables below, evaluate and .                1  6    2  8    3  3    4  1                  1  3    2  5    3  2    4  7    To evaluate , we start from the inside with the value 3. We then evaluate the inside expression using the table that defines the function : . We can then use that result as the input to the function, so is replaced by the equivalent value 2 and we can evaluate . Then using the table that defines the function , we find that . Thus, .  To evaluate , we first evaluate the inside expression using the first table: . Then using the table for , we can evaluate: .     Using the tables from the example above, evaluate and .     Using the graphs below, evaluate .   Graph of    Graph of f(x), a downward-opening U-shaped graph which passes through 1 comma 2, 2 comma 5, 3 comma 6, 4 comma 5, and 5 comma 2      Graph of    Graph of g(x), an upward-opening U-shaped graph which passes through 1 comma 3, 2 comma 0, 3 comma negative 1, 4 comma 0, and 5 comma 3     To evaluate , we again start with the inside evaluation. We evaluate using the graph of the function, finding the input of 1 on the horizontal axis and finding the output value of the graph at that input. Here, .  Using this value as the input to the function, . We can then evaluate this by looking to the graph of the function, finding the input of 3 on the horizontal axis, and reading the output value of the graph at this input.   , so .     Using the graphs from the previous example, evaluate .     Composition using Formulas  When evaluating a composition of functions where we have either created or been given formulas, the concept of working from the inside out remains the same. First, we evaluate the inside function using the input value provided, then use the resulting output as the input to the outside function.    Given and , evaluate .  Since the inside evaluation is , we start by evaluating the function at 1:     Then , so we evaluate the function at an input of 5:   .     Using the functions from the example above, evaluate .   While we can compose the functions as above for each individual input value, sometimes it would be really helpful to find a single formula which will calculate the result of a composition . To do this, we will extend our idea of function evaluation. Recall that when we evaluate a function like , we put whatever value is inside the parentheses after the function name into the formula wherever we see the input variable.    Given , evaluate and .        We could simplify the results above if we wanted to          We are not limited, however, to using a numerical value as the input to the function. We can put anything into the function: a value, a different variable, or even an algebraic expression, provided we use the input expression everywhere we see the input variable.    Using the function from the previous example, evaluate .  This means that the input value for is some unknown quantity . As before, we evaluate by replacing the input variable with the input quantity, in this case .       The same idea can then be applied to expressions more complicated than a single letter.    Using the same function from above, evaluate .  Everywhere in the formula for where there was a , we would replace it with the input . Since in the original formula the input was squared in the first term, the entire input needs to be squared when we substitute, so we need to use grouping parentheses. To avoid problems, it is advisable to always use parentheses around inputs.     We could simplify this expression further to if we wanted to:     Use the “FOIL” technique (first, outside, inside, last)     distribute the negative sign     combine like terms   .      Using the same function, evaluate .  We replace the original input in the formula with the new input expression, .   .     Given , evaluate .   This now allows us to find an expression for a composition of functions. If we want to find a formula for , we can start by writing out the formula for . We can then evaluate the function at that expression, as in the examples above.    Let and , find and .  To find , we start by evaluating the inside, writing out the formula for .     We then use the expression as input for the function .     We then evaluate the function using the formula for as the input.  Since ,   This gives us the formula for the composition: .  Likewise, to find , we evaluate the inside, writing out the formula for :     Now we evaluate the function using as the input.        Let and , find and .     A city manager determines that the tax revenue, , in millions of dollars collected on a population of thousand people is given by the formula , and that the city’s population, in thousands, is predicted to follow the formula , where is measured in years after 2010. Find a formula for the tax revenue as a function of the year.  Since we want tax revenue as a function of the year, we want year to be our initial input, and revenue to be our final output. To find revenue, we will first have to predict the city population, and then use that result as the input to the tax function. So, we need to find . Evaluating this,     This composition gives us a single formula which can be used to predict the tax revenue during a given year, without needing to find the intermediary population value.  For example, to predict the tax revenue in 2017, when (because is measured in years after 2010),   million dollars      Domain of Compositions  When we think about the domain of a composition , we must consider both the domain of the inner function and the domain of the composition itself. While it is tempting to only look at the resulting composite function, if the inner function were undefined at a value of , the composition would not be possible.    Let and . Find the domain of .  Since we want to avoid the square root of negative numbers, the domain of is the set of values where . The domain is .  The composition is . The composition is undefined when , so that value must also be excluded from the domain. Notice that the composition doesn’t involve a square root, but we still have to consider the domain limitation from the inside function. Combining the two restrictions, the domain is all values of greater than or equal to 2, except .  In inequalities, the domain is: or . In interval notation, the domain is: .     Let and . Find the domain of .     Decomposing Functions  In some cases, it is desirable to decompose a function – to write it as a composition of two simpler functions.   Write as the composition of two functions.  We are looking for two functions, and , so . To do this, we look for a function inside a function in the formula for . As one possibility, we might notice that is the inside of the square root. We could then decompose the function as:        We can check our answer by recomposing the functions:   Note that this is not the only solution to the problem. Another non-trivial decomposition would be and .     Conclusions   Important Topics of this Section      Definition of Composition of Functions    Compositions using:   Words    Tables    Graphs    Equations       Domain of Compositions    Decomposition of Functions        [Exercise Answers]   The final cost, , depends on the clearance price, , which is based on the original discount, . Or, the original discount , determines the clearance price and the final cost is half of the clearance price.     and           (did you remember to insert your input values using parentheses?)          ,      is undefined at . The composition, is undefined when , when .  Restricting these two values, the domain is        "
},
{
  "id": "Chapter1Section5-2-4",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-2-4",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Composition of Functions.",
  "body": " Composition of Functions   When the output of one function is used as the input of another, we call the entire operation a composition of functions. We write and read this as “ of of ” or “ composed with at ”.  An alternate notation for composition uses the composition operator:    is read “ of of ” or “ composed with at ”, just like . We could refer to the name of this new function as .   "
},
{
  "id": "Chapter1Section5-2-5",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-2-5",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  Suppose gives the number of calories burned doing sit-ups, and gives the number of sit-ups a person can do in minutes. Interpret .  When we are asked to interpret, we are being asked to explain the meaning of the expression in words. The inside expression in the composition is . Since the input to the function is time, the 3 is representing 3 minutes, and is the number of sit-ups that can be done in 3 minutes. Taking this output and using it as the input to the function will gives us the calories that can be burned by the number of sit-ups that can be done in 3 minutes.   "
},
{
  "id": "Chapter1Section5-2-7",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-2-7",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Suppose gives miles that can be driven in hours, and gives the gallons of gas used in driving miles. Which of these expressions is meaningful: or ?  The expression takes miles as the input and outputs a number of gallons. The function is expecting a number of hours as the input; trying to give it a number of gallons as input does not make sense. Remember the units must match, and number of gallons does not match number of hours, so the expression is meaningless.  The expression takes hours as input and outputs a number of miles driven. The function is expecting a number of miles as the input, so giving the output of the function (miles driven) as an input value for , where gallons of gas depend on miles driven, does make sense. The expression makes sense and will give the number of gallons of gas used, driving a certain number of miles, , in hours.   "
},
{
  "id": "Chapter1Section5-2-8",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-2-8",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": " In a department store you see a sign that says 50% off clearance merchandise, so final cost depends on the clearance price, , according to the function . Clearance price, , depends on the original discount, , given to the clearance item, . Interpret .  "
},
{
  "id": "Chapter1Section5-3-3",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-3-3",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Using the tables below, evaluate and .                1  6    2  8    3  3    4  1                  1  3    2  5    3  2    4  7    To evaluate , we start from the inside with the value 3. We then evaluate the inside expression using the table that defines the function : . We can then use that result as the input to the function, so is replaced by the equivalent value 2 and we can evaluate . Then using the table that defines the function , we find that . Thus, .  To evaluate , we first evaluate the inside expression using the first table: . Then using the table for , we can evaluate: .   "
},
{
  "id": "Chapter1Section5-3-4",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-3-4",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": " Using the tables from the example above, evaluate and .  "
},
{
  "id": "Chapter1Section5-3-5",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-3-5",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Using the graphs below, evaluate .   Graph of    Graph of f(x), a downward-opening U-shaped graph which passes through 1 comma 2, 2 comma 5, 3 comma 6, 4 comma 5, and 5 comma 2      Graph of    Graph of g(x), an upward-opening U-shaped graph which passes through 1 comma 3, 2 comma 0, 3 comma negative 1, 4 comma 0, and 5 comma 3     To evaluate , we again start with the inside evaluation. We evaluate using the graph of the function, finding the input of 1 on the horizontal axis and finding the output value of the graph at that input. Here, .  Using this value as the input to the function, . We can then evaluate this by looking to the graph of the function, finding the input of 3 on the horizontal axis, and reading the output value of the graph at this input.   , so .   "
},
{
  "id": "Chapter1Section5-3-6",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-3-6",
  "type": "Checkpoint",
  "number": "1.4.10",
  "title": "",
  "body": " Using the graphs from the previous example, evaluate .  "
},
{
  "id": "Chapter1Section5-4-3",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-3",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Given and , evaluate .  Since the inside evaluation is , we start by evaluating the function at 1:     Then , so we evaluate the function at an input of 5:   .   "
},
{
  "id": "Chapter1Section5-4-4",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-4",
  "type": "Checkpoint",
  "number": "1.4.12",
  "title": "",
  "body": " Using the functions from the example above, evaluate .  "
},
{
  "id": "Chapter1Section5-4-6",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-6",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": "  Given , evaluate and .        We could simplify the results above if we wanted to         "
},
{
  "id": "Chapter1Section5-4-8",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-8",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": "  Using the function from the previous example, evaluate .  This means that the input value for is some unknown quantity . As before, we evaluate by replacing the input variable with the input quantity, in this case .      "
},
{
  "id": "Chapter1Section5-4-10",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-10",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "  Using the same function from above, evaluate .  Everywhere in the formula for where there was a , we would replace it with the input . Since in the original formula the input was squared in the first term, the entire input needs to be squared when we substitute, so we need to use grouping parentheses. To avoid problems, it is advisable to always use parentheses around inputs.     We could simplify this expression further to if we wanted to:     Use the “FOIL” technique (first, outside, inside, last)     distribute the negative sign     combine like terms   .   "
},
{
  "id": "Chapter1Section5-4-11",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-11",
  "type": "Example",
  "number": "1.4.16",
  "title": "",
  "body": "  Using the same function, evaluate .  We replace the original input in the formula with the new input expression, .   .   "
},
{
  "id": "Chapter1Section5-4-12",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-12",
  "type": "Checkpoint",
  "number": "1.4.17",
  "title": "",
  "body": " Given , evaluate .  "
},
{
  "id": "Chapter1Section5-4-14",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-14",
  "type": "Example",
  "number": "1.4.18",
  "title": "",
  "body": "  Let and , find and .  To find , we start by evaluating the inside, writing out the formula for .     We then use the expression as input for the function .     We then evaluate the function using the formula for as the input.  Since ,   This gives us the formula for the composition: .  Likewise, to find , we evaluate the inside, writing out the formula for :     Now we evaluate the function using as the input.      "
},
{
  "id": "Chapter1Section5-4-15",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-15",
  "type": "Checkpoint",
  "number": "1.4.19",
  "title": "",
  "body": " Let and , find and .  "
},
{
  "id": "Chapter1Section5-4-16",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-4-16",
  "type": "Example",
  "number": "1.4.20",
  "title": "",
  "body": "  A city manager determines that the tax revenue, , in millions of dollars collected on a population of thousand people is given by the formula , and that the city’s population, in thousands, is predicted to follow the formula , where is measured in years after 2010. Find a formula for the tax revenue as a function of the year.  Since we want tax revenue as a function of the year, we want year to be our initial input, and revenue to be our final output. To find revenue, we will first have to predict the city population, and then use that result as the input to the tax function. So, we need to find . Evaluating this,     This composition gives us a single formula which can be used to predict the tax revenue during a given year, without needing to find the intermediary population value.  For example, to predict the tax revenue in 2017, when (because is measured in years after 2010),   million dollars   "
},
{
  "id": "Chapter1Section5-5-3",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-5-3",
  "type": "Example",
  "number": "1.4.21",
  "title": "",
  "body": "  Let and . Find the domain of .  Since we want to avoid the square root of negative numbers, the domain of is the set of values where . The domain is .  The composition is . The composition is undefined when , so that value must also be excluded from the domain. Notice that the composition doesn’t involve a square root, but we still have to consider the domain limitation from the inside function. Combining the two restrictions, the domain is all values of greater than or equal to 2, except .  In inequalities, the domain is: or . In interval notation, the domain is: .   "
},
{
  "id": "Chapter1Section5-5-4",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-5-4",
  "type": "Checkpoint",
  "number": "1.4.22",
  "title": "",
  "body": " Let and . Find the domain of .  "
},
{
  "id": "Chapter1Section5-6-3",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-6-3",
  "type": "Checkpoint",
  "number": "1.4.23",
  "title": "",
  "body": " Write as the composition of two functions.  We are looking for two functions, and , so . To do this, we look for a function inside a function in the formula for . As one possibility, we might notice that is the inside of the square root. We could then decompose the function as:        We can check our answer by recomposing the functions:   Note that this is not the only solution to the problem. Another non-trivial decomposition would be and .  "
},
{
  "id": "Chapter1Section5-7-2",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-7-2",
  "type": "Example",
  "number": "1.4.24",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Definition of Composition of Functions    Compositions using:   Words    Tables    Graphs    Equations       Domain of Compositions    Decomposition of Functions      "
},
{
  "id": "Chapter1Section5-7-3",
  "level": "2",
  "url": "Chapter1Section5.html#Chapter1Section5-7-3",
  "type": "Checkpoint",
  "number": "1.4.25",
  "title": "",
  "body": " [Exercise Answers]   The final cost, , depends on the clearance price, , which is based on the original discount, . Or, the original discount , determines the clearance price and the final cost is half of the clearance price.     and           (did you remember to insert your input values using parentheses?)          ,      is undefined at . The composition, is undefined when , when .  Restricting these two values, the domain is      "
},
{
  "id": "Chapter1Section6",
  "level": "1",
  "url": "Chapter1Section6.html",
  "type": "Section",
  "number": "1.5",
  "title": "Transformations",
  "body": " Transformations  Often when given a problem, we try to model the scenario using mathematics in the form of words, tables, graphs, and equations in order to explain or solve it. When building models, it is often helpful to build from existing formulas or models. Knowing the basic graphs of your tool-kit functions can help you solve problems by being able to model new behavior by adapting something you already know. Unfortunately, the models and existing formulas we know are not always the same as the ones presented in the problems we face.  Fortunately, there are systematic ways to shift, stretch, compress, flip and combine functions to help them become better models for the problems we are trying to solve. We can transform what we already know into what we need, hence the name, “Transformation of functions.” When we have a story problem, formula, graph, or table, we can then transform that function in a variety of ways to form new functions.   Shifts    To regulate temperature in a green building, air flow vents near the roof open and close throughout the day to allow warm air to escape. The graph below shows the open vents (in square feet) throughout the day, in hours after midnight. During the summer, the facilities staff decides to try to better regulate temperature by increasing the amount of open vents by 20 square feet throughout the day. Sketch a graph of this new function.   Graph of    Graph of V(t), which is 0 from t=0 to t=8, then increases to 10 comma 225, remains constant to 17 comma 225, decreases to 19 comma 0 then stays constant at 0 until t=24     We can sketch a graph of this new function by adding 20 to each of the output values of the original function. This will have the effect of shifting the graph up.   Graph of    Graph of S(t), which is 20 from t=0 to t=8, then increases to 10 comma 245, remains constant to 17 comma 245, decreases to 19 comma 20 then stays constant at 20 until t=24     Notice that in the second graph, for each input value, the output value has increased by twenty, so if we call the new function , we could write .  Note that this notation tells us that for any value of , can be found by evaluating the function at the same input, then adding twenty to the result. This defines as a transformation of the function , in this case a vertical shift up 20 units.  Notice that with a vertical shift the input values stay the same and only the output values change.     Vertical Shift   Given a function , if we define a new function as , where is a constant, then is a vertical shift of the function , where all the output values have been increased by . If is positive, then the graph will shift up by units. If is negative, then the graph will shift down by units.      A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  7  11    The formula tells us that we can find the output values of the function by subtracting 3 from the output values of the function. For example, is found from the given table. is our given transformation, so . Subtracting 3 from each value, we can complete a table of values for ,                 2  4  6  8       -2  0  4  8      As with the earlier vertical shift, notice the input values stay the same and only the output values change.   The function gives the height of a ball (in meters) thrown upwards from the ground after seconds. Suppose the ball was instead thrown from the top of a 10-meter building. Relate this new height function to , then find a formula for .   The vertical shift is a change to the output, or outside, of the function. We will now look at how changes to input, on the inside of the function, change its graph and meaning.    Returning to our building air flow example from the beginning of the section, suppose that in fall, the facilities staff decides that the original venting plan starts too late, and they want to move the entire venting program to start two hours earlier. Sketch a graph of the new function.   the original venting plan    Graph of V(t), which is 0 from t=0 to t=8, then increases to 10 comma 225, remains constant to 17 comma 225, decreases to 19 comma 0 then stays constant at 0 until t=24      starting 2 hours sooner    Graph of F(t), which is 0 from t=negative 2 to t=6, then increases to 8 comma 225, remains constant to 15 comma 225, decreases to 17 comma 0 then stays constant at 0 until t=22     In the new graph, which we can call , at each time, the air flow is the same as the original function was two hours later. For example, in the original function , the air flow starts to change at 8 am, while for the function the air flow starts to change at 6 am. The comparable function values are .  Notice also that the vents first opened to 220 sq. ft. at 10 am under the original plan, while under the new plan the vents reach 220 sq. ft. at 8 am, so .  In both cases we see that since starts 2 hours sooner, the same output values are reached when, .  Note that had the effect of shifting the graph to the left.    Horizontal changes or “inside changes” affect the domain of a function (the input) instead of the range and often seem counterintuitive. The new function uses the same outputs as but matches those outputs to inputs two hours earlier than those of . Said another way, we must add 2 hours to the input of to find the corresponding output for : .   Horizontal Shift   Given a function , if we define a new function as , where is a constant, then is a horizontal shift of the function . If is positive, then the graph will shift left by units. If is negative, then the graph will shift right by units.      A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  7  11    The formula tells us that the output values of are the same as the output value of with an input value three smaller. For example, we know that . To get the same output from the function, we will need an input value that is 3 larger: We input a value that is three larger for because the function takes three away before evaluating the function .                    5  7  9  11       1  3  7  11    The result is that the function has been shifted to the right by 3. Notice the output values for remain the same as the output values for in the chart, but the corresponding input values, , have shifted to the right by 3: 2 shifted to 5, 4 shifted to 7, 6 shifted to 9 and 8 shifted to 11.      The graph shown is a transformation of the toolkit function . Relate this new function to , and then find a formula for .   Graph of    U-shaped graph that decreases to 2 comma 0 then increases     Notice that the graph looks almost identical in shape to the function, but the values are shifted to the right two units. The vertex used to be at but now the vertex is at . The graph is the basic quadratic function shifted two to the right, so .  Notice how we must input the value , to get the output value ; the values must be two units larger, because of the shift to the right by 2 units.  We can then use the definition of the function to write a formula for by evaluating : Since and . Thus, .  If you find yourself having trouble determining whether the shift is +2 or -2, it might help to consider a single point on the graph. For a quadratic, looking at the bottom-most point is convenient. In the original function, . In our shifted function, . To obtain the output value of 0 from the function, we need to decide whether a +2 or -2 will work to satisfy . For this to work, we will need to subtract 2 from our input values.    When thinking about horizontal and vertical shifts, it is good to keep in mind that vertical shifts are affecting the output values of the function, while horizontal shifts are affecting the input values of the function.    The function gives the number of gallons of gas required to drive miles. Interpret and .   is adding 10 to the output, gallons. This is 10 gallons of gas more than is required to drive miles. So, this is the gas required to drive miles, plus another 10 gallons of gas.   is adding 10 to the input, miles. This is the number of gallons of gas required to drive 10 miles more than miles.     Given the function graph the original function and the transformation .   Is this a horizontal or a vertical change?    Which way is the graph shifted and by how many units?    Graph and on the same axes.      Now that we have two transformations, we can combine them together.  Remember:    Vertical Shifts are outside changes that affect the output (vertical) axis values shifting the transformed function up or down.    Horizontal Shifts are inside changes that affect the input (horizontal) axis values shifting the transformed function left or right.      Write a formula for the graph shown, which is a transformation of the toolkit square root function.   Graph of    A square root graph with initial point at 1 comma 2, increasing to the right     The graph of the toolkit function starts at the origin, so this graph has been shifted 1 to the right, and up 2. In function notation, we could write that as . Using the formula for the square root function we can write .  Note that this transformation has changed the domain and range of the function. This new graph has domain and range .      Reflections  Another transformation that can be applied to a function is a reflection over the horizontal or vertical axis.    Reflect the graph of both vertically and horizontally.  Reflecting the graph vertically, each output value will be reflected over the horizontal t axis:   Graph of    A basic square root graph with initial point at the origin, increasing to the right      Graph of reflected vertically    A vertically-flipped square root graph with initial point at the origin, decreasing to the right     Since each output value is the opposite of the original output value, we can write .  Notice this is an outside change or vertical change that affects the output values, so the negative sign belongs outside of the function. Reflecting horizontally, each input value will be reflected over the vertical axis.   Graph of reflected horizontally    A horizontally-flipped square root graph decreasing to the origin and terminating     Since each input value is the opposite of the original input value, we can write .  Notice this is an inside change or horizontal change that affects the input values, so the negative sign is on the inside of the function.  Note that these transformations can affect the domain and range of the functions. While the original square root function has domain and range , the vertical reflection gives the function the range , and the horizontal reflection gives the function the domain .     Reflections   Given a function , if we define a new function as , then is a vertical reflection of the function , sometimes called a reflection about the horizontal axis.  If we define a new function as , then is a horizontal reflection of the function , sometimes called a reflection about the vertical axis.      A function is given as a table below. Create a table for the function and .                 2  4  6  8       1  3  7  11    For , this is a vertical reflection, so the values stay the same and each output value will be the opposite of the original output value:                 2  4  6  8       -1  -3  -7  -11    For , this is a horizontal reflection, and each input value will be the opposite of the original input value and the values stay the same as the values:                 -2  -4  -6  -8       1  3  7  11        A common model for learning has an equation similar to , where is the percentage of mastery that can be achieved after practice sessions. This is a transformation of the function shown here.   Graph of    An increasing curving-up graph, passing through 0 comma 1     Sketch a graph of . This equation combines three transformations into one equation.   A horizontal reflection:     A vertical reflection:     A vertical shift up 1:      We can sketch a graph by applying these transformations one at a time to the original function:   Original graph of     An increasing curving-up graph, passing through 0 comma 1      Horizontally Reflected:     A horizontal flip of the previous graph, now decreasing curving-up, passing through 0 comma 1      Then vertically reflected:     A vertical flip of the previous graph, now increasing curving-down, passing through 0 comma negative 1      Then shifted vertically:     A shift up 1 of the previous graph, now increasing curving-down, passing through 0 comma 0     Note: As a model for learning, this function would be limited to a domain of , with corresponding range .     Given the toolkit function , graph and . Do you notice anything surprising?   Some functions exhibit symmetry, in which reflections result in the original graph. For example, reflecting the toolkit functions or about the -axis will result in the original graph. We call these types of graphs symmetric about the -axis.  Likewise, if the graphs of or were reflected over both axes, the result would be the original graph:       A standard cubic graph, increasing curving down to the origin, then increasing curving up          A horizontal flip of a standard cubic graph, decreasing curving up then decreasing curving down          A vertical and horizontal flip of a standard cubic graph, with the result looking like a standard cubic graph     We call these graphs symmetric about the origin.    Stretches and Compressions  With shifts, we saw the effect of adding or subtracting to the inputs or outputs of a function. We now explore the effects of multiplying the inputs or outputs.  Remember, we can transform the inside (input values) of a function, or we can transform the outside (output values) of a function. Each change has a specific effect that can be seen graphically.    A function models the growth of a population of fruit flies. The growth is shown in the graph.     A piecewise function that passes through 0 comma 1, 3 comma 3, 6 comma 2, and 7 comma 0     A scientist is comparing this to another population, , that grows the same way, but starts twice as large. Sketch a graph of this population.  Since the population is always twice as large, the new population’s output values are always twice the original function output values. Graphically, this would look like the second graph shown.  Symbolically, .     A piecewise function that passes through 0 comma 2, 3 comma 6, 6 comma 4, and 7 comma 0     This means that for any input , the value of the function is twice the value of the function. Notice the effect on the graph is a vertical stretching of the graph, where every point doubles its distance from the horizontal axis. The input values, , stay the same while the output values are twice as large as before.     Vertical Stretch and Compression   Given a function , if we define a new function as , where is a constant then is a vertical stretch or compression of the function .  If , then the graph will be stretched vertically. If , then the graph will be compressed vertically. If , then there will be combination of a vertical stretch or compression with a vertical reflection.      A function is given as a table below.                 2  4  6  8       1  3  7  11    Create a table for the function . The formula tells us that the output values of are half of the output values of with the same inputs. For example, we know that . Then .                 2  4  6  8                     The result is that the function has been compressed vertically by . Each output value has been cut in half, so the graph would now be half the original height.      The graph shown is a transformation of the toolkit function . Relate this new function to , then find a formula for .     A transformation of a basic cubic graph, passing through the origin and passing through 2 comma 2     When trying to determine a vertical stretch or shift, it is helpful to look for a point on the graph that is relatively clear. In this graph, it appears that . With the basic cubic function at the same input, .  Based on that, it appears that the outputs of are the outputs of the function , since .  From this we can fairly safely conclude that: .  We can write a formula for by using the definition of the function . .    Now we consider changes to the inside of a function.    Returning to the fruit fly population we looked at earlier, suppose the scientist is now comparing it to a population that progresses through its lifespan twice as fast as the original population. In other words, this new population, , will progress in 1 hour the same amount the original population did in 2 hours, and in 2 hours, will progress as much as the original population did in 4 hours. Sketch a graph of this population.  Symbolically, we could write , , and in general, .  Graphing this,   Original population     A piecewise function that passes through 0 comma 1, 3 comma 3, 6 comma 2, and 7 comma 0      Transformed population     A piecewise function that passes through 0 comma 1, 1.5 comma 3, 3 comma 2, and 3.5 comma 0     Note the effect on the graph is a horizontal compression, where all input values are half their original distance from the vertical axis.     Horizontal Stretch\/Compression   Given a function , if we define a new function as , where is a constant then is a horizontal stretch or compression of the function .  If , then the graph will be compressed by a factor of . If , then the graph will be stretched by a factor of . If , then there will be combination of a horizontal stretch or compression with a horizontal reflection.      A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  5  11    The formula tells us that the output values for are the same as the output values for the function at an input half the size. Notice that we don’t have enough information to determine since , and we do not have a value for in our table. Our input values to will need to be twice as large to get inputs for that we can evaluate. For example, we can determine since .                 4  8  12  16       1  3  7  11    Since each input value has been doubled, the result is that the function has been stretched horizontally by a factor of 2.      Two graphs are shown below. Relate the function to .   Graph of     A piecewise function that passes through 0 comma 0, 4 comma 4 and 6 comma 4      Graph of     A piecewise function that passes through 0 comma 0, 2 comma 4 and 3 comma 4     The graph of looks like the graph of horizontally compressed. Since ends at and ends at we can see that the values have been compressed by , because . We might also notice that , and . Either way, we can describe this relationship as . This is a horizontal compression by .    Notice that the coefficient needed for a horizontal stretch or compression is the reciprocal of the stretch or compression. To stretch the graph horizontally by 4, we need a coefficient of in our function: . This means the input values must be four times larger to produce the same result, requiring the input to be larger, causing the horizontal stretching.   Write a formula for the toolkit square root function horizontally stretched by three.   It is useful to note that for most toolkit functions, a horizontal stretch or vertical stretch can be represented in other ways. For example, a horizontal compression of the function by would result in a new function , but this can also be written as , a vertical stretch of by 4. When writing a formula for a transformed toolkit, we only need to find one transformation that would produce the graph.    Combining Transformations  When combining transformations, it is very important to consider the order of the transformations. For example, vertically shifting by 3 and then vertically stretching by 2 does not create the same graph as vertically stretching by 2 then vertically shifting by 3.  When we see an expression like , which transformation should we start with? The answer here follows nicely from order of operations, for outside transformations. Given the output value of , we first multiply by 2, causing the vertical stretch, then add 3, causing the vertical shift. (Multiplication before Addition)   Combining Vertical Transformations   When combining vertical transformations written in the form , first vertically stretch by , then vertically shift by .    Horizontal transformations are a little trickier to think about. When we write for example, we have to think about how the inputs to the function relate to the inputs to the function. Suppose we know . What input to would produce that output? In other words, what value of will allow ? We would need . To solve for , we would first subtract 3, resulting in horizontal shift, then divide by 2, causing a horizontal compression.   Combining Horizontal Transformations   When combining horizontal transformations written in the form , first horizontally shift by , then horizontally stretch by .    This format ends up being very difficult to work with, since it is usually much easier to horizontally stretch a graph before shifting. We can work around this by factoring inside the function. Factoring in this way allows us to horizontally stretch first, then shift horizontally.   Combining Horizontal Transformations (Factored Form)   When combining horizontal transformations written in the form , first horizontally stretch by , then horizontally shift by .     Independence of Horizontal and Vertical Transformations   Horizontal and vertical transformations are independent. It does not matter whether horizontal or vertical transformations are done first.      Given the table of values for the function below, create a table of values for the function .                 6  12  18  24       10  14  15  17    There are 3 steps to this transformation, and we will work from the inside out. Starting with the horizontal transformations, is a horizontal compression by , which means we multiply each value by .                 2  4  6  8       10  14  15  17    Looking now to the vertical transformations, we start with the vertical stretch, which will multiply the output values by 2. We apply this to the previous transformation.                 2  4  6  8       20  28  30  34    Finally, we can apply the vertical shift, which will add 1 to all the output values.                 2  4  6  8       21  29  31  35        Using the graph of below, sketch a graph of .   Graph of     A semi-circle with endpoints at negative 2 comma 0 and 2 comma 0 and passing through 0 comma 2     To make things simpler, we’ll start by factoring out the inside of the function .  By factoring the inside, we can first horizontally stretch by 2, as indicated by the on the inside of the function. Remember twice the size of 0 is still 0, so the point remains at while the point will stretch to . Next, we horizontally shift left by 2 units, as indicated by the .  Last, we vertically shift down by 3 to complete our sketch, as indicated by the -3 on the outside of the function.   Horizontal stretch by 2    A horizontally stretched semi-circle with endpoints at negative 4 comma 0 and 4 comma 0 and passing through 0 comma 2      Horizontal shift left by 2    A horizontally stretched and shifted semi-circle with endpoints at negative 6 comma 0 and 2 comma 0 and passing through negative 2 comma 2      Vertical shift down by 3    A horizontally stretched and shifted semi-circle with endpoints at negative 6 comma negative 3 and 2 comma negative 3 and passing through negative 2 comma negative 1         Write an equation for the transformed graph of the quadratic function shown.     A downwards opening parabola with vertex at negative 3 comma 1 and passing through 2 comma negative 1 and 4 comma negative 1     Since this is a quadratic function, first consider what the basic quadratic tool kit function looks like and how this has changed. Observing the graph, we notice several transformations:  The original tool kit function has been flipped over the -axis, some kind of stretch or compression has occurred, and we can see a shift to the right 3 units and a shift up 1 unit.  In total there are four operations:   Vertical reflection, requiring a negative sign outside the function    Vertical Stretch or Horizontal Compression*    Horizontal Shift Right 3 units, which tells us to put on the inside of the function    Vertical Shift up 1 unit, telling us to add 1 on the outside of the function     * It is unclear from the graph whether it is showing a vertical stretch or a horizontal compression. For the quadratic, it turns out we could represent it either way, so we’ll use a vertical stretch. You may be able to determine the vertical stretch by observation.  By observation, the basic tool kit function has a vertex at and symmetrical points at and . These points are one unit up and one unit over from the vertex. The new points on the transformed graph are one unit away horizontally but 2 units away vertically. They have been stretched vertically by two.  Not everyone can see this by simply looking at the graph. If you can, great, but if not, we can solve for it. First, we will write the equation for this graph, with an unknown vertical stretch.  The original function is . To vertically reflect: . To vertically stretch: . To shift right by 3 units: . To shift up by 1 unit: .  We now know our graph is going to have an equation of the form . To find the vertical stretch, we can identify any point on the graph (other than the highest point), such as the point , which tells us . Using our general formula, and substituting 2 for , and -1 for :        This tells us that to produce the graph we need a vertical stretch by two. The function that produces this graph is therefore .      Consider the linear function . Describe its transformation in words using the identity tool kit function as a reference.      On what interval(s) is the function increasing and decreasing?  This is a transformation of the toolkit reciprocal squared function, :  A vertical flip and vertical stretch by 2:   A shift right by 1:   A shift up by 3:   The basic reciprocal squared function is increasing on and decreasing on . Because of the vertical flip, the function will be decreasing on the left and increasing on the right. The horizontal shift right by 1 will also shift these intervals to the right one. From this, we can determine will be increasing on and decreasing on . We also could graph the transformation to help us determine these intervals.   Graph of    A graph that starts fairly level near y=3, decreasing slowly at first then more rapidly off the graph as it approaches x=1. Past x=1 the graph increases rapidly from off the graph then levels off towards y=3         Conclusions   Important Topics of This Section      Transformations    Vertical Shift (up and down)    Horizontal Shifts (left and right)    Reflections over the vertical and horizontal axis    Vertical Stretches and Compressions    Horizontal Stretches and Compressions    Combinations of Transformation        [Exercise Answers]           A square root graph labeled f(x) starting at the origin and increasing to the right, and a shifted square root graph labeled g(x) starting at negative 2 comma 0 and increasing to the right.          A parabola labeled f(x) and h(x) with vertex at the origin and opening up, and a parabola labeled g(x) with vertex at the origin and opening down.     Notice: g(x) = f(-x) looks the same as f(x)     so using the square root function we get .    The identity tool kit function has been transformed in 3 steps   Vertically stretched by 2.    Vertically reflected over the -axis.    Vertically shifted up by 1 unit.          "
},
{
  "id": "Chapter1Section6-4-2",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-2",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  To regulate temperature in a green building, air flow vents near the roof open and close throughout the day to allow warm air to escape. The graph below shows the open vents (in square feet) throughout the day, in hours after midnight. During the summer, the facilities staff decides to try to better regulate temperature by increasing the amount of open vents by 20 square feet throughout the day. Sketch a graph of this new function.   Graph of    Graph of V(t), which is 0 from t=0 to t=8, then increases to 10 comma 225, remains constant to 17 comma 225, decreases to 19 comma 0 then stays constant at 0 until t=24     We can sketch a graph of this new function by adding 20 to each of the output values of the original function. This will have the effect of shifting the graph up.   Graph of    Graph of S(t), which is 20 from t=0 to t=8, then increases to 10 comma 245, remains constant to 17 comma 245, decreases to 19 comma 20 then stays constant at 20 until t=24     Notice that in the second graph, for each input value, the output value has increased by twenty, so if we call the new function , we could write .  Note that this notation tells us that for any value of , can be found by evaluating the function at the same input, then adding twenty to the result. This defines as a transformation of the function , in this case a vertical shift up 20 units.  Notice that with a vertical shift the input values stay the same and only the output values change.   "
},
{
  "id": "Chapter1Section6-4-3",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-3",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Vertical Shift.",
  "body": " Vertical Shift   Given a function , if we define a new function as , where is a constant, then is a vertical shift of the function , where all the output values have been increased by . If is positive, then the graph will shift up by units. If is negative, then the graph will shift down by units.   "
},
{
  "id": "Chapter1Section6-4-4",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-4",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  7  11    The formula tells us that we can find the output values of the function by subtracting 3 from the output values of the function. For example, is found from the given table. is our given transformation, so . Subtracting 3 from each value, we can complete a table of values for ,                 2  4  6  8       -2  0  4  8     "
},
{
  "id": "Chapter1Section6-4-6",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-6",
  "type": "Checkpoint",
  "number": "1.5.6",
  "title": "",
  "body": " The function gives the height of a ball (in meters) thrown upwards from the ground after seconds. Suppose the ball was instead thrown from the top of a 10-meter building. Relate this new height function to , then find a formula for .  "
},
{
  "id": "Chapter1Section6-4-8",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-8",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  Returning to our building air flow example from the beginning of the section, suppose that in fall, the facilities staff decides that the original venting plan starts too late, and they want to move the entire venting program to start two hours earlier. Sketch a graph of the new function.   the original venting plan    Graph of V(t), which is 0 from t=0 to t=8, then increases to 10 comma 225, remains constant to 17 comma 225, decreases to 19 comma 0 then stays constant at 0 until t=24      starting 2 hours sooner    Graph of F(t), which is 0 from t=negative 2 to t=6, then increases to 8 comma 225, remains constant to 15 comma 225, decreases to 17 comma 0 then stays constant at 0 until t=22     In the new graph, which we can call , at each time, the air flow is the same as the original function was two hours later. For example, in the original function , the air flow starts to change at 8 am, while for the function the air flow starts to change at 6 am. The comparable function values are .  Notice also that the vents first opened to 220 sq. ft. at 10 am under the original plan, while under the new plan the vents reach 220 sq. ft. at 8 am, so .  In both cases we see that since starts 2 hours sooner, the same output values are reached when, .  Note that had the effect of shifting the graph to the left.   "
},
{
  "id": "Chapter1Section6-4-10",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-10",
  "type": "Definition",
  "number": "1.5.10",
  "title": "Horizontal Shift.",
  "body": " Horizontal Shift   Given a function , if we define a new function as , where is a constant, then is a horizontal shift of the function . If is positive, then the graph will shift left by units. If is negative, then the graph will shift right by units.   "
},
{
  "id": "Chapter1Section6-4-11",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-11",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": "  A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  7  11    The formula tells us that the output values of are the same as the output value of with an input value three smaller. For example, we know that . To get the same output from the function, we will need an input value that is 3 larger: We input a value that is three larger for because the function takes three away before evaluating the function .                    5  7  9  11       1  3  7  11    The result is that the function has been shifted to the right by 3. Notice the output values for remain the same as the output values for in the chart, but the corresponding input values, , have shifted to the right by 3: 2 shifted to 5, 4 shifted to 7, 6 shifted to 9 and 8 shifted to 11.   "
},
{
  "id": "Chapter1Section6-4-12",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-12",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  The graph shown is a transformation of the toolkit function . Relate this new function to , and then find a formula for .   Graph of    U-shaped graph that decreases to 2 comma 0 then increases     Notice that the graph looks almost identical in shape to the function, but the values are shifted to the right two units. The vertex used to be at but now the vertex is at . The graph is the basic quadratic function shifted two to the right, so .  Notice how we must input the value , to get the output value ; the values must be two units larger, because of the shift to the right by 2 units.  We can then use the definition of the function to write a formula for by evaluating : Since and . Thus, .  If you find yourself having trouble determining whether the shift is +2 or -2, it might help to consider a single point on the graph. For a quadratic, looking at the bottom-most point is convenient. In the original function, . In our shifted function, . To obtain the output value of 0 from the function, we need to decide whether a +2 or -2 will work to satisfy . For this to work, we will need to subtract 2 from our input values.   "
},
{
  "id": "Chapter1Section6-4-14",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-14",
  "type": "Example",
  "number": "1.5.14",
  "title": "",
  "body": "  The function gives the number of gallons of gas required to drive miles. Interpret and .   is adding 10 to the output, gallons. This is 10 gallons of gas more than is required to drive miles. So, this is the gas required to drive miles, plus another 10 gallons of gas.   is adding 10 to the input, miles. This is the number of gallons of gas required to drive 10 miles more than miles.   "
},
{
  "id": "Chapter1Section6-4-15",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-15",
  "type": "Checkpoint",
  "number": "1.5.15",
  "title": "",
  "body": " Given the function graph the original function and the transformation .   Is this a horizontal or a vertical change?    Which way is the graph shifted and by how many units?    Graph and on the same axes.     "
},
{
  "id": "Chapter1Section6-4-19",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-4-19",
  "type": "Example",
  "number": "1.5.16",
  "title": "",
  "body": "  Write a formula for the graph shown, which is a transformation of the toolkit square root function.   Graph of    A square root graph with initial point at 1 comma 2, increasing to the right     The graph of the toolkit function starts at the origin, so this graph has been shifted 1 to the right, and up 2. In function notation, we could write that as . Using the formula for the square root function we can write .  Note that this transformation has changed the domain and range of the function. This new graph has domain and range .   "
},
{
  "id": "Chapter1Section6-5-3",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-5-3",
  "type": "Example",
  "number": "1.5.18",
  "title": "",
  "body": "  Reflect the graph of both vertically and horizontally.  Reflecting the graph vertically, each output value will be reflected over the horizontal t axis:   Graph of    A basic square root graph with initial point at the origin, increasing to the right      Graph of reflected vertically    A vertically-flipped square root graph with initial point at the origin, decreasing to the right     Since each output value is the opposite of the original output value, we can write .  Notice this is an outside change or vertical change that affects the output values, so the negative sign belongs outside of the function. Reflecting horizontally, each input value will be reflected over the vertical axis.   Graph of reflected horizontally    A horizontally-flipped square root graph decreasing to the origin and terminating     Since each input value is the opposite of the original input value, we can write .  Notice this is an inside change or horizontal change that affects the input values, so the negative sign is on the inside of the function.  Note that these transformations can affect the domain and range of the functions. While the original square root function has domain and range , the vertical reflection gives the function the range , and the horizontal reflection gives the function the domain .   "
},
{
  "id": "Chapter1Section6-5-4",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-5-4",
  "type": "Definition",
  "number": "1.5.22",
  "title": "Reflections.",
  "body": " Reflections   Given a function , if we define a new function as , then is a vertical reflection of the function , sometimes called a reflection about the horizontal axis.  If we define a new function as , then is a horizontal reflection of the function , sometimes called a reflection about the vertical axis.   "
},
{
  "id": "Chapter1Section6-5-5",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-5-5",
  "type": "Example",
  "number": "1.5.23",
  "title": "",
  "body": "  A function is given as a table below. Create a table for the function and .                 2  4  6  8       1  3  7  11    For , this is a vertical reflection, so the values stay the same and each output value will be the opposite of the original output value:                 2  4  6  8       -1  -3  -7  -11    For , this is a horizontal reflection, and each input value will be the opposite of the original input value and the values stay the same as the values:                 -2  -4  -6  -8       1  3  7  11     "
},
{
  "id": "Chapter1Section6-5-6",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-5-6",
  "type": "Example",
  "number": "1.5.24",
  "title": "",
  "body": "  A common model for learning has an equation similar to , where is the percentage of mastery that can be achieved after practice sessions. This is a transformation of the function shown here.   Graph of    An increasing curving-up graph, passing through 0 comma 1     Sketch a graph of . This equation combines three transformations into one equation.   A horizontal reflection:     A vertical reflection:     A vertical shift up 1:      We can sketch a graph by applying these transformations one at a time to the original function:   Original graph of     An increasing curving-up graph, passing through 0 comma 1      Horizontally Reflected:     A horizontal flip of the previous graph, now decreasing curving-up, passing through 0 comma 1      Then vertically reflected:     A vertical flip of the previous graph, now increasing curving-down, passing through 0 comma negative 1      Then shifted vertically:     A shift up 1 of the previous graph, now increasing curving-down, passing through 0 comma 0     Note: As a model for learning, this function would be limited to a domain of , with corresponding range .   "
},
{
  "id": "Chapter1Section6-5-7",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-5-7",
  "type": "Checkpoint",
  "number": "1.5.30",
  "title": "",
  "body": " Given the toolkit function , graph and . Do you notice anything surprising?  "
},
{
  "id": "c1s6i15",
  "level": "2",
  "url": "Chapter1Section6.html#c1s6i15",
  "type": "Figure",
  "number": "1.5.31",
  "title": "",
  "body": "     A standard cubic graph, increasing curving down to the origin, then increasing curving up    "
},
{
  "id": "c1s6i16",
  "level": "2",
  "url": "Chapter1Section6.html#c1s6i16",
  "type": "Figure",
  "number": "1.5.32",
  "title": "",
  "body": "     A horizontal flip of a standard cubic graph, decreasing curving up then decreasing curving down    "
},
{
  "id": "c1s6i17",
  "level": "2",
  "url": "Chapter1Section6.html#c1s6i17",
  "type": "Figure",
  "number": "1.5.33",
  "title": "",
  "body": "     A vertical and horizontal flip of a standard cubic graph, with the result looking like a standard cubic graph    "
},
{
  "id": "Chapter1Section6-6-4",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-4",
  "type": "Example",
  "number": "1.5.34",
  "title": "",
  "body": "  A function models the growth of a population of fruit flies. The growth is shown in the graph.     A piecewise function that passes through 0 comma 1, 3 comma 3, 6 comma 2, and 7 comma 0     A scientist is comparing this to another population, , that grows the same way, but starts twice as large. Sketch a graph of this population.  Since the population is always twice as large, the new population’s output values are always twice the original function output values. Graphically, this would look like the second graph shown.  Symbolically, .     A piecewise function that passes through 0 comma 2, 3 comma 6, 6 comma 4, and 7 comma 0     This means that for any input , the value of the function is twice the value of the function. Notice the effect on the graph is a vertical stretching of the graph, where every point doubles its distance from the horizontal axis. The input values, , stay the same while the output values are twice as large as before.   "
},
{
  "id": "Chapter1Section6-6-5",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-5",
  "type": "Definition",
  "number": "1.5.37",
  "title": "Vertical Stretch and Compression.",
  "body": " Vertical Stretch and Compression   Given a function , if we define a new function as , where is a constant then is a vertical stretch or compression of the function .  If , then the graph will be stretched vertically. If , then the graph will be compressed vertically. If , then there will be combination of a vertical stretch or compression with a vertical reflection.   "
},
{
  "id": "Chapter1Section6-6-6",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-6",
  "type": "Example",
  "number": "1.5.38",
  "title": "",
  "body": "  A function is given as a table below.                 2  4  6  8       1  3  7  11    Create a table for the function . The formula tells us that the output values of are half of the output values of with the same inputs. For example, we know that . Then .                 2  4  6  8                     The result is that the function has been compressed vertically by . Each output value has been cut in half, so the graph would now be half the original height.   "
},
{
  "id": "Chapter1Section6-6-7",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-7",
  "type": "Example",
  "number": "1.5.39",
  "title": "",
  "body": "  The graph shown is a transformation of the toolkit function . Relate this new function to , then find a formula for .     A transformation of a basic cubic graph, passing through the origin and passing through 2 comma 2     When trying to determine a vertical stretch or shift, it is helpful to look for a point on the graph that is relatively clear. In this graph, it appears that . With the basic cubic function at the same input, .  Based on that, it appears that the outputs of are the outputs of the function , since .  From this we can fairly safely conclude that: .  We can write a formula for by using the definition of the function . .   "
},
{
  "id": "Chapter1Section6-6-9",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-9",
  "type": "Example",
  "number": "1.5.41",
  "title": "",
  "body": "  Returning to the fruit fly population we looked at earlier, suppose the scientist is now comparing it to a population that progresses through its lifespan twice as fast as the original population. In other words, this new population, , will progress in 1 hour the same amount the original population did in 2 hours, and in 2 hours, will progress as much as the original population did in 4 hours. Sketch a graph of this population.  Symbolically, we could write , , and in general, .  Graphing this,   Original population     A piecewise function that passes through 0 comma 1, 3 comma 3, 6 comma 2, and 7 comma 0      Transformed population     A piecewise function that passes through 0 comma 1, 1.5 comma 3, 3 comma 2, and 3.5 comma 0     Note the effect on the graph is a horizontal compression, where all input values are half their original distance from the vertical axis.   "
},
{
  "id": "Chapter1Section6-6-10",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-10",
  "type": "Definition",
  "number": "1.5.44",
  "title": "Horizontal Stretch\/Compression.",
  "body": " Horizontal Stretch\/Compression   Given a function , if we define a new function as , where is a constant then is a horizontal stretch or compression of the function .  If , then the graph will be compressed by a factor of . If , then the graph will be stretched by a factor of . If , then there will be combination of a horizontal stretch or compression with a horizontal reflection.   "
},
{
  "id": "Chapter1Section6-6-11",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-11",
  "type": "Example",
  "number": "1.5.45",
  "title": "",
  "body": "  A function is given as a table below. Create a table for the function .                 2  4  6  8       1  3  5  11    The formula tells us that the output values for are the same as the output values for the function at an input half the size. Notice that we don’t have enough information to determine since , and we do not have a value for in our table. Our input values to will need to be twice as large to get inputs for that we can evaluate. For example, we can determine since .                 4  8  12  16       1  3  7  11    Since each input value has been doubled, the result is that the function has been stretched horizontally by a factor of 2.   "
},
{
  "id": "Chapter1Section6-6-12",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-12",
  "type": "Example",
  "number": "1.5.46",
  "title": "",
  "body": "  Two graphs are shown below. Relate the function to .   Graph of     A piecewise function that passes through 0 comma 0, 4 comma 4 and 6 comma 4      Graph of     A piecewise function that passes through 0 comma 0, 2 comma 4 and 3 comma 4     The graph of looks like the graph of horizontally compressed. Since ends at and ends at we can see that the values have been compressed by , because . We might also notice that , and . Either way, we can describe this relationship as . This is a horizontal compression by .   "
},
{
  "id": "Chapter1Section6-6-14",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-6-14",
  "type": "Checkpoint",
  "number": "1.5.49",
  "title": "",
  "body": " Write a formula for the toolkit square root function horizontally stretched by three.  "
},
{
  "id": "Chapter1Section6-7-4",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-4",
  "type": "Definition",
  "number": "1.5.50",
  "title": "Combining Vertical Transformations.",
  "body": " Combining Vertical Transformations   When combining vertical transformations written in the form , first vertically stretch by , then vertically shift by .   "
},
{
  "id": "Chapter1Section6-7-6",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-6",
  "type": "Definition",
  "number": "1.5.51",
  "title": "Combining Horizontal Transformations.",
  "body": " Combining Horizontal Transformations   When combining horizontal transformations written in the form , first horizontally shift by , then horizontally stretch by .   "
},
{
  "id": "Chapter1Section6-7-8",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-8",
  "type": "Definition",
  "number": "1.5.52",
  "title": "Combining Horizontal Transformations (Factored Form).",
  "body": " Combining Horizontal Transformations (Factored Form)   When combining horizontal transformations written in the form , first horizontally stretch by , then horizontally shift by .   "
},
{
  "id": "Chapter1Section6-7-9",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-9",
  "type": "Definition",
  "number": "1.5.53",
  "title": "Independence of Horizontal and Vertical Transformations.",
  "body": " Independence of Horizontal and Vertical Transformations   Horizontal and vertical transformations are independent. It does not matter whether horizontal or vertical transformations are done first.   "
},
{
  "id": "Chapter1Section6-7-10",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-10",
  "type": "Example",
  "number": "1.5.54",
  "title": "",
  "body": "  Given the table of values for the function below, create a table of values for the function .                 6  12  18  24       10  14  15  17    There are 3 steps to this transformation, and we will work from the inside out. Starting with the horizontal transformations, is a horizontal compression by , which means we multiply each value by .                 2  4  6  8       10  14  15  17    Looking now to the vertical transformations, we start with the vertical stretch, which will multiply the output values by 2. We apply this to the previous transformation.                 2  4  6  8       20  28  30  34    Finally, we can apply the vertical shift, which will add 1 to all the output values.                 2  4  6  8       21  29  31  35     "
},
{
  "id": "Chapter1Section6-7-11",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-11",
  "type": "Example",
  "number": "1.5.55",
  "title": "",
  "body": "  Using the graph of below, sketch a graph of .   Graph of     A semi-circle with endpoints at negative 2 comma 0 and 2 comma 0 and passing through 0 comma 2     To make things simpler, we’ll start by factoring out the inside of the function .  By factoring the inside, we can first horizontally stretch by 2, as indicated by the on the inside of the function. Remember twice the size of 0 is still 0, so the point remains at while the point will stretch to . Next, we horizontally shift left by 2 units, as indicated by the .  Last, we vertically shift down by 3 to complete our sketch, as indicated by the -3 on the outside of the function.   Horizontal stretch by 2    A horizontally stretched semi-circle with endpoints at negative 4 comma 0 and 4 comma 0 and passing through 0 comma 2      Horizontal shift left by 2    A horizontally stretched and shifted semi-circle with endpoints at negative 6 comma 0 and 2 comma 0 and passing through negative 2 comma 2      Vertical shift down by 3    A horizontally stretched and shifted semi-circle with endpoints at negative 6 comma negative 3 and 2 comma negative 3 and passing through negative 2 comma negative 1      "
},
{
  "id": "Chapter1Section6-7-12",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-12",
  "type": "Example",
  "number": "1.5.60",
  "title": "",
  "body": "  Write an equation for the transformed graph of the quadratic function shown.     A downwards opening parabola with vertex at negative 3 comma 1 and passing through 2 comma negative 1 and 4 comma negative 1     Since this is a quadratic function, first consider what the basic quadratic tool kit function looks like and how this has changed. Observing the graph, we notice several transformations:  The original tool kit function has been flipped over the -axis, some kind of stretch or compression has occurred, and we can see a shift to the right 3 units and a shift up 1 unit.  In total there are four operations:   Vertical reflection, requiring a negative sign outside the function    Vertical Stretch or Horizontal Compression*    Horizontal Shift Right 3 units, which tells us to put on the inside of the function    Vertical Shift up 1 unit, telling us to add 1 on the outside of the function     * It is unclear from the graph whether it is showing a vertical stretch or a horizontal compression. For the quadratic, it turns out we could represent it either way, so we’ll use a vertical stretch. You may be able to determine the vertical stretch by observation.  By observation, the basic tool kit function has a vertex at and symmetrical points at and . These points are one unit up and one unit over from the vertex. The new points on the transformed graph are one unit away horizontally but 2 units away vertically. They have been stretched vertically by two.  Not everyone can see this by simply looking at the graph. If you can, great, but if not, we can solve for it. First, we will write the equation for this graph, with an unknown vertical stretch.  The original function is . To vertically reflect: . To vertically stretch: . To shift right by 3 units: . To shift up by 1 unit: .  We now know our graph is going to have an equation of the form . To find the vertical stretch, we can identify any point on the graph (other than the highest point), such as the point , which tells us . Using our general formula, and substituting 2 for , and -1 for :        This tells us that to produce the graph we need a vertical stretch by two. The function that produces this graph is therefore .   "
},
{
  "id": "Chapter1Section6-7-13",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-13",
  "type": "Example",
  "number": "1.5.62",
  "title": "",
  "body": "  Consider the linear function . Describe its transformation in words using the identity tool kit function as a reference.   "
},
{
  "id": "Chapter1Section6-7-14",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-7-14",
  "type": "Example",
  "number": "1.5.63",
  "title": "",
  "body": "  On what interval(s) is the function increasing and decreasing?  This is a transformation of the toolkit reciprocal squared function, :  A vertical flip and vertical stretch by 2:   A shift right by 1:   A shift up by 3:   The basic reciprocal squared function is increasing on and decreasing on . Because of the vertical flip, the function will be decreasing on the left and increasing on the right. The horizontal shift right by 1 will also shift these intervals to the right one. From this, we can determine will be increasing on and decreasing on . We also could graph the transformation to help us determine these intervals.   Graph of    A graph that starts fairly level near y=3, decreasing slowly at first then more rapidly off the graph as it approaches x=1. Past x=1 the graph increases rapidly from off the graph then levels off towards y=3      "
},
{
  "id": "Chapter1Section6-8-2",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-8-2",
  "type": "Example",
  "number": "1.5.65",
  "title": "Important Topics of This Section.",
  "body": " Important Topics of This Section      Transformations    Vertical Shift (up and down)    Horizontal Shifts (left and right)    Reflections over the vertical and horizontal axis    Vertical Stretches and Compressions    Horizontal Stretches and Compressions    Combinations of Transformation      "
},
{
  "id": "Chapter1Section6-8-3",
  "level": "2",
  "url": "Chapter1Section6.html#Chapter1Section6-8-3",
  "type": "Checkpoint",
  "number": "1.5.66",
  "title": "",
  "body": " [Exercise Answers]           A square root graph labeled f(x) starting at the origin and increasing to the right, and a shifted square root graph labeled g(x) starting at negative 2 comma 0 and increasing to the right.          A parabola labeled f(x) and h(x) with vertex at the origin and opening up, and a parabola labeled g(x) with vertex at the origin and opening down.     Notice: g(x) = f(-x) looks the same as f(x)     so using the square root function we get .    The identity tool kit function has been transformed in 3 steps   Vertically stretched by 2.    Vertically reflected over the -axis.    Vertically shifted up by 1 unit.        "
},
{
  "id": "Chapter1Section7",
  "level": "1",
  "url": "Chapter1Section7.html",
  "type": "Section",
  "number": "1.6",
  "title": "Inverse Functions",
  "body": " Inverse Functions   Definitions  A fashion designer is traveling to Milan for a fashion show. He asks his assistant, Betty, what 75 degrees Fahrenheit is in Celsius, and after a quick search on Google, she finds the formula . Using this formula, she calculates degrees Celsius. The next day, the designer sends his assistant the week’s weather forecast for Milan and asks her to convert the temperatures to Fahrenheit.     A weather forecast for four days with temperatures in Celsius.     At first, Betty might consider using the formula she has already found to do the conversions. After all, she knows her algebra, and can easily solve the equation for F after substituting a value for C. For example, to convert 26 degrees Celsius, she could write: ,   ,   .  After considering this option for a moment, she realizes that solving the equation for each of the temperatures would get awfully tedious, and realizes that since evaluation is easier than solving, it would be much more convenient to have a different formula, one which takes the Celsius temperature and outputs the Fahrenheit temperature. This is the idea of an inverse function, where the input becomes the output, and the output becomes the input.   Inverse Function   If , then a function is an inverse of if . The inverse of a function is typically notated , which is read “f inverse”, so equivalently, if then .    Important: The superscripts -1 used in the notation for inverse functions is simply a notation, and does not designate an exponent or power of -1.    If for a particular function, , what do we know about the inverse?  The inverse function reverses which quantity is input and which quantity is output, so if , then .  Alternatively, if you want to re-name the inverse function , then .     Given that , what do we know about the original function ?   Notice that the original function and the inverse function undo each other. If , then , returning us to the original input. More simply put, if you compose these functions together you get the original input as your answer. and .     A diagram showing two circles, one labeled domain of f with a point labeled a in the circle, and the other labeled Range of f with a point labeled b in the circle. An arrow labeled f of x points from a to b. An arrow labeled f inverse of x points from b to a.     Since the outputs of the function are the inputs to , the range of is also the domain of . Likewise, since the inputs to are the outputs of , the domain of is the range of .  Basically, like how the input and output values switch, the domain and ranges switch as well. But be careful, because sometimes a function doesn’t even have an inverse function, or only has an inverse on a limited domain. For example, the inverse of is , since a square “undoes” a square root, but it is only the inverse of on the domain , since that is the range of .    The function has domain and range , what would we expect the domain and range of to be?  We would expect to swap the domain and range of , so would have domain and range .      A function is given as a table below, showing distance in miles that a car has traveled in minutes. Find and interpret .               (minutes)  30  50  70  90     (miles)  20  40  60  70    The inverse function takes an output of and returns an input for . So, in the expression , the 70 is an output value of the original function, representing 70 miles. The inverse will return the corresponding input of the original function , 90 minutes, so . Interpreting this, it means that to drive 70 miles, it took 90 minutes.  Alternatively, recall the definition of the inverse was that if then . By this definition, if you are given then you are looking for a value so that . In this case, we are looking for a so that , which is when .     Using the table below,               (minutes)  30  50  70  90     (miles)  20  40  60  70    Find and interpret the following                 A function is given as a graph below. Find and    Graph of    An increasing curving-up graph, passing through 3 comma 1 and 5 comma 3     To evaluate , we find 3 on the horizontal axis and find the corresponding output value on the vertical axis. The point tells us that . To evaluate , recall that by definition means . By looking for the output value 3 on the vertical axis we find the point on the graph, which means , so by definition, .     Using the graph in the example above   find     estimate         Returning to our designer’s assistant, find a formula for the inverse function that gives Fahrenheit temperature given a Celsius temperature.  A quick Google search would find the inverse function, but alternatively, Betty might look back at how she solved for the Fahrenheit temperature for a specific Celsius value, and repeat the process in general. ,   ,   .  By solving in general, we have uncovered the inverse function. If Then     It is important to note that not all functions will have an inverse function. Since the function takes an output of and returns an input of , in order for to itself be a function, then each output of (input to ) must correspond to exactly one input of (output of ). You might recall that this is the definition of a one-to-one function.   Properties of Inverses   In order for a function to have an inverse, it must be a one-to-one function.    In some cases, it is desirable to have an inverse for a function even though the function is not one-to-one. In those cases, we can often limit the domain of the original function to an interval on which the function is one-to-one, then find an inverse only on that interval.    Conclusions   Important Topics of this Section      Definition of an inverse function    Composition of inverse functions yield the original input value    Not every function has an inverse function    To have an inverse a function must be one-to-one    Restricting the domain of functions that are not one-to-one.        [Exercise Answers]            . In 60 minutes, 50 miles are traveled.     . To travel 60 miles, it will take 70 minutes.                (this is an approximation – answers may vary slightly          "
},
{
  "id": "c1s7i1",
  "level": "2",
  "url": "Chapter1Section7.html#c1s7i1",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": "   A weather forecast for four days with temperatures in Celsius.    "
},
{
  "id": "Chapter1Section7-2-8",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-8",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Inverse Function.",
  "body": " Inverse Function   If , then a function is an inverse of if . The inverse of a function is typically notated , which is read “f inverse”, so equivalently, if then .   "
},
{
  "id": "Chapter1Section7-2-10",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-10",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "  If for a particular function, , what do we know about the inverse?  The inverse function reverses which quantity is input and which quantity is output, so if , then .  Alternatively, if you want to re-name the inverse function , then .   "
},
{
  "id": "Chapter1Section7-2-11",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-11",
  "type": "Checkpoint",
  "number": "1.6.4",
  "title": "",
  "body": " Given that , what do we know about the original function ?  "
},
{
  "id": "c1s7i2",
  "level": "2",
  "url": "Chapter1Section7.html#c1s7i2",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": "   A diagram showing two circles, one labeled domain of f with a point labeled a in the circle, and the other labeled Range of f with a point labeled b in the circle. An arrow labeled f of x points from a to b. An arrow labeled f inverse of x points from b to a.    "
},
{
  "id": "Chapter1Section7-2-16",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-16",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": "  The function has domain and range , what would we expect the domain and range of to be?  We would expect to swap the domain and range of , so would have domain and range .   "
},
{
  "id": "Chapter1Section7-2-17",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-17",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": "  A function is given as a table below, showing distance in miles that a car has traveled in minutes. Find and interpret .               (minutes)  30  50  70  90     (miles)  20  40  60  70    The inverse function takes an output of and returns an input for . So, in the expression , the 70 is an output value of the original function, representing 70 miles. The inverse will return the corresponding input of the original function , 90 minutes, so . Interpreting this, it means that to drive 70 miles, it took 90 minutes.  Alternatively, recall the definition of the inverse was that if then . By this definition, if you are given then you are looking for a value so that . In this case, we are looking for a so that , which is when .   "
},
{
  "id": "Chapter1Section7-2-18",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-18",
  "type": "Checkpoint",
  "number": "1.6.8",
  "title": "",
  "body": " Using the table below,               (minutes)  30  50  70  90     (miles)  20  40  60  70    Find and interpret the following              "
},
{
  "id": "Chapter1Section7-2-19",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-19",
  "type": "Example",
  "number": "1.6.9",
  "title": "",
  "body": "  A function is given as a graph below. Find and    Graph of    An increasing curving-up graph, passing through 3 comma 1 and 5 comma 3     To evaluate , we find 3 on the horizontal axis and find the corresponding output value on the vertical axis. The point tells us that . To evaluate , recall that by definition means . By looking for the output value 3 on the vertical axis we find the point on the graph, which means , so by definition, .   "
},
{
  "id": "Chapter1Section7-2-20",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-20",
  "type": "Checkpoint",
  "number": "1.6.11",
  "title": "",
  "body": " Using the graph in the example above   find     estimate      "
},
{
  "id": "Chapter1Section7-2-21",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-21",
  "type": "Example",
  "number": "1.6.12",
  "title": "",
  "body": "  Returning to our designer’s assistant, find a formula for the inverse function that gives Fahrenheit temperature given a Celsius temperature.  A quick Google search would find the inverse function, but alternatively, Betty might look back at how she solved for the Fahrenheit temperature for a specific Celsius value, and repeat the process in general. ,   ,   .  By solving in general, we have uncovered the inverse function. If Then    "
},
{
  "id": "Chapter1Section7-2-23",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-2-23",
  "type": "Definition",
  "number": "1.6.13",
  "title": "Properties of Inverses.",
  "body": " Properties of Inverses   In order for a function to have an inverse, it must be a one-to-one function.   "
},
{
  "id": "Chapter1Section7-3-2",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-3-2",
  "type": "Example",
  "number": "1.6.14",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Definition of an inverse function    Composition of inverse functions yield the original input value    Not every function has an inverse function    To have an inverse a function must be one-to-one    Restricting the domain of functions that are not one-to-one.      "
},
{
  "id": "Chapter1Section7-3-3",
  "level": "2",
  "url": "Chapter1Section7.html#Chapter1Section7-3-3",
  "type": "Checkpoint",
  "number": "1.6.15",
  "title": "",
  "body": " [Exercise Answers]            . In 60 minutes, 50 miles are traveled.     . To travel 60 miles, it will take 70 minutes.                (this is an approximation – answers may vary slightly        "
},
{
  "id": "Chapter2Section1",
  "level": "1",
  "url": "Chapter2Section1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Functions",
  "body": " Linear Functions  As you hop into a taxicab in Las Vegas, the meter will immediately read $3.50; this is the “drop” charge made when the taximeter is activated. After that initial fee, the taximeter will add $2.76 for each mile the taxi drives . In this scenario, the total taxi fare depends upon the number of miles ridden in the taxi, and we can ask whether it is possible to model this type of scenario with a function. Using descriptive variables, we choose for miles and for Cost in dollars as a function of miles: . We know for certain that , since the $3.50 drop charge is assessed regardless of how many miles are driven. Since $2.67 is added for each mile driven, then .  If we then drove a second mile, another $2.67 would be added to the cost: .  If we drove a third mile, another $2.67 would be added to the cost: .  From this we might observe the pattern, and conclude that if miles are driven, because we start with a $3.50 drop fee and then for each mile increase we add $2.67.  It is good to verify that the units make sense in this equation. The $3.50 drop charge is measured in dollars; the $2.67 charge is measured in dollars per mile. When dollars per mile are multiplied by a number of miles, the result is a number of dollars, matching the units on the 3.50, and matching the desired units for the cost function.  Notice this equation consisted of two quantities. The first is the fixed $3.50 charge which does not change based on the value of the input. The second is the $2.67 dollars per mile value, which is a rate of change. In the equation, this rate of change is multiplied by the input value.  Looking at this same problem in table format we can also see the cost changes by $2.67 for every 1 mile increase.                 0  1  2  3       3.50  6.17  8.84  11.51    It is important here to note that in this equation, the rate of change is constant; over any interval, the rate of change is the same.   Constant Rate of Change   If and are the values of two quantities related by a constant rate of change, then over any interval from to , where changes from to , then the ratio of the change in over the change in will always have the same value, regardless of the interval. That is, will always return the same value regardless of the interval of values being observed. This ratio is how we calculate the constant rate of change of with respect to , and is commonly represented by the letter .  Note in function notation, and , so we could equivalently write     Graphing this equation, we see the shape is a line, which is how these functions get their name: linear functions.     An increasing line passing through 0 comma 3.50 and 20 comma 56.90     When the number of miles is zero the cost is $3.50, giving the point on the graph. This is the vertical intercept, also known as the initial value. The graph is increasing in a straight line from left to right because for each mile the cost goes up by $2.67; this rate remains consistent. In this example, you have seen the taxicab cost modeled in words, an equation, a table and in graphical form. Whenever possible, ensure that you can link these four representations together to continually build your skills. It is important to note that you will not always be able to find all 4 representations for a problem and so being able to work with all 4 forms is very important.   Linear Function   A linear function is a function whose quantities vary with a constant rate of change, and whose graph produces a line. Linear functions can always be written in the form or (they’re equivalent) where is the initial or starting value of the function (when input, ), and is the constant rate of change of the function  Many people like to write linear functions in the form because it corresponds to the way we tend to speak: “The output starts at and increases at a rate of .”  For this reason alone we will use the form for many of the examples, but remember they are equivalent and can be written correctly both ways.     Increasing\/Decreasing Slope   Let be the constant rate of change of a linear function (also called slope). The slope determines if the function is an increasing function or a decreasing function. is an increasing function if . is a decreasing function if . If , the rate of change zero, and the function is just a horizontal line passing through the point , neither increasing nor decreasing.      Marcus currently owns 200 songs in his iTunes collection. Every month, he adds 15 new songs. Write a formula for the number of songs, , in his iTunes collection as a function of the number of months, . How many songs will he own in a year?  Let be the function such that . The initial value for this function is 200, since he currently owns 200 songs, so . The number of songs increases by 15 songs per month, so the rate of change is 15 songs per month. With this information, we can write the formula: . is an increasing linear function. With this formula we can predict how many songs he will have in 1 year (12 months): . So, Marcus will have 380 songs in 12 months.     If you earn $30,000 per year and you spend $29,000 per year, write an equation for the amount of money you save after years, assuming you start with nothing in savings.     The population of a city increased from 23,400 to 27,800 between 2002 and 2006. Find the constant rate of change of the population during this time span.  The constant rate of change will relate the change in population to the change in time. The population increased by people over the 4 year time interval. To find the constant rate of change, the number of people per year the population changed by: people per year.  Notice that we knew the population was increasing, so we would expect our value for the slope to be positive. This is a quick way to check to see if your value is reasonable.      The pressure, , in pounds per square inch (PSI) on a diver depends upon their depth below the water surface, , in feet, following the equation . Interpret the components of this function.  The rate of change, or slope, 0.434 would have units ”output” per ”input” =”pressure” per ”depth” =”PSI” per ”ft” . This tells us the pressure on the diver increases by 0.434 PSI for each foot their depth increases.  The initial value, 14.696, will have the same units as the output, so this tells us that at a depth of 0 feet, the pressure on the diver will be 14.696 PSI.      If is a linear function, where and , find the constant rate of change.   tells us that the input 3 corresponds with the output -2, and tells us that the input 8 corresponds with the output 1. To find the constant rate of change, we divide the change in output by the change in input:   If desired we could also write this as .     Given that the graph of a linear function passes through the two points and , find the constant rate of change. Is this function increasing or decreasing?   We can now find the constant rate of change given two input-output pairs, and can write an equation for a linear function once we have the rate of change and initial value. If we have two input-output pairs and they do not include the initial value of the function, then we will have to solve for it.    Write an equation for the linear function graphed below.     A decreasing line passing through 0 comma 7, 4 comma 4 and 8 comma 1     Looking at the graph, we might notice that it passes through the points and . From the first value, we know the initial value of the function is , so in this case we will only need to calculate the rate of change:     This allows us to write the equation:       If is a linear function, , and , find an equation for the function.  In a previous example, we computed the rate of change to be . In this case, we do not know the initial value , so we will have to solve for it. Using the rate of change, we know the equation will have the form . Since we know the value of the function when , we can evaluate the function at 3.   . Since we know that , we can substitute on the left side: . This leaves us with an equation we can solve for the initial value .  Combining this with the value for the rate of change, we can now write a formula for this function: .      Working as an insurance salesperson, Ilya earns a base salary and a commission on each new policy, so Ilya’s weekly income, I, depends on the number of new policies, n, he sells during the week. Last week he sold 3 new policies, and earned $760 for the week. The week before, he sold 5 new policies, and earned $920. Find an equation for f(n)=I, and interpret the meaning of the components of the equation.  The given information gives us two input-output pairs: and . We start by finding the rate of change. .  Keeping track of units can help us interpret this quantity. Income increased by $160 when the number of policies increased by 2, so the rate of change is $80 per policy; Ilya earns a commission of $80 for each policy sold during the week.  We can then solve for the initial value: Starting by substituting in the constant rate of change, we know; . When , , giving . This allows us to solve for : .  This value is the starting value for the function. This is Ilya’s income when n = 0, which means no new policies are sold. We can interpret this as Ilya’s base salary for the week, which does not depend upon the number of policies sold.  Writing the final equation: . Our final interpretation is: Ilya’s base salary is $520 per week and he earns an additional $80 commission for each policy sold each week.     Looking at the previous example: Determine the independent and dependent variables. Is this function one-to-one?    The balance in your college payment account, , is a function of the number of semesters, , you attend. Interpret the function in words. How many semesters of college can you pay for until this account is empty?     Given the table below write a linear equation that represents the table values               , number of weeks  0  2  4  6     , number of rats  1000  1080  1160  1240    We can see from the table that the initial value of rats is 1000 so in the linear format .  Rather than solving for , we can notice from the table that the population goes up by 80 for every 2 weeks that pass. This rate is consistent from week 0, to week 2, 4, and 6. The rate of change is 80 rats per 2 weeks. This can be simplified to 40 rats per week and we can write as .  If you didn’t notice this from the table you could still solve for the slope using any two points from the table. For example, using and , rats per week.     Important Topics of this Section      Definition of Modeling    Definition of a linear function    Structure of a linear function    Increasing and Decreasing functions    Finding the vertical intercept     Finding the slope\/rate of change,     Interpreting linear functions        [Exercise Answers]    $1000 is saved each year.     ; Decreasing because .     (number of policies sold) is the independent variable and (weekly income as a function of policies sold) is the dependent variable. This function is one-to-one.    Your College account starts with $24,000 in it and you withdraw $8,000 each semester (or your account contains $24,000 and decreases by $8000 each semester). Solving gives . You can pay for 3 semesters before the money in this account is gone.      "
},
{
  "id": "Chapter2Section1-11",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-11",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Constant Rate of Change.",
  "body": " Constant Rate of Change   If and are the values of two quantities related by a constant rate of change, then over any interval from to , where changes from to , then the ratio of the change in over the change in will always have the same value, regardless of the interval. That is, will always return the same value regardless of the interval of values being observed. This ratio is how we calculate the constant rate of change of with respect to , and is commonly represented by the letter .  Note in function notation, and , so we could equivalently write    "
},
{
  "id": "c2s1i1",
  "level": "2",
  "url": "Chapter2Section1.html#c2s1i1",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": "   An increasing line passing through 0 comma 3.50 and 20 comma 56.90    "
},
{
  "id": "Chapter2Section1-15",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-15",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Linear Function.",
  "body": " Linear Function   A linear function is a function whose quantities vary with a constant rate of change, and whose graph produces a line. Linear functions can always be written in the form or (they’re equivalent) where is the initial or starting value of the function (when input, ), and is the constant rate of change of the function  Many people like to write linear functions in the form because it corresponds to the way we tend to speak: “The output starts at and increases at a rate of .”  For this reason alone we will use the form for many of the examples, but remember they are equivalent and can be written correctly both ways.   "
},
{
  "id": "Chapter2Section1-16",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-16",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Increasing\/Decreasing Slope.",
  "body": " Increasing\/Decreasing Slope   Let be the constant rate of change of a linear function (also called slope). The slope determines if the function is an increasing function or a decreasing function. is an increasing function if . is a decreasing function if . If , the rate of change zero, and the function is just a horizontal line passing through the point , neither increasing nor decreasing.   "
},
{
  "id": "Chapter2Section1-17",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-17",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Marcus currently owns 200 songs in his iTunes collection. Every month, he adds 15 new songs. Write a formula for the number of songs, , in his iTunes collection as a function of the number of months, . How many songs will he own in a year?  Let be the function such that . The initial value for this function is 200, since he currently owns 200 songs, so . The number of songs increases by 15 songs per month, so the rate of change is 15 songs per month. With this information, we can write the formula: . is an increasing linear function. With this formula we can predict how many songs he will have in 1 year (12 months): . So, Marcus will have 380 songs in 12 months.   "
},
{
  "id": "Chapter2Section1-18",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-18",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "",
  "body": " If you earn $30,000 per year and you spend $29,000 per year, write an equation for the amount of money you save after years, assuming you start with nothing in savings.  "
},
{
  "id": "Chapter2Section1-19",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-19",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  The population of a city increased from 23,400 to 27,800 between 2002 and 2006. Find the constant rate of change of the population during this time span.  The constant rate of change will relate the change in population to the change in time. The population increased by people over the 4 year time interval. To find the constant rate of change, the number of people per year the population changed by: people per year.  Notice that we knew the population was increasing, so we would expect our value for the slope to be positive. This is a quick way to check to see if your value is reasonable.   "
},
{
  "id": "Chapter2Section1-20",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-20",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "  The pressure, , in pounds per square inch (PSI) on a diver depends upon their depth below the water surface, , in feet, following the equation . Interpret the components of this function.  The rate of change, or slope, 0.434 would have units ”output” per ”input” =”pressure” per ”depth” =”PSI” per ”ft” . This tells us the pressure on the diver increases by 0.434 PSI for each foot their depth increases.  The initial value, 14.696, will have the same units as the output, so this tells us that at a depth of 0 feet, the pressure on the diver will be 14.696 PSI.   "
},
{
  "id": "Chapter2Section1-21",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-21",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  If is a linear function, where and , find the constant rate of change.   tells us that the input 3 corresponds with the output -2, and tells us that the input 8 corresponds with the output 1. To find the constant rate of change, we divide the change in output by the change in input:   If desired we could also write this as .   "
},
{
  "id": "Chapter2Section1-22",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-22",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "",
  "body": " Given that the graph of a linear function passes through the two points and , find the constant rate of change. Is this function increasing or decreasing?  "
},
{
  "id": "Chapter2Section1-24",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-24",
  "type": "Example",
  "number": "2.1.11",
  "title": "",
  "body": "  Write an equation for the linear function graphed below.     A decreasing line passing through 0 comma 7, 4 comma 4 and 8 comma 1     Looking at the graph, we might notice that it passes through the points and . From the first value, we know the initial value of the function is , so in this case we will only need to calculate the rate of change:     This allows us to write the equation:    "
},
{
  "id": "Chapter2Section1-25",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-25",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": "  If is a linear function, , and , find an equation for the function.  In a previous example, we computed the rate of change to be . In this case, we do not know the initial value , so we will have to solve for it. Using the rate of change, we know the equation will have the form . Since we know the value of the function when , we can evaluate the function at 3.   . Since we know that , we can substitute on the left side: . This leaves us with an equation we can solve for the initial value .  Combining this with the value for the rate of change, we can now write a formula for this function: .   "
},
{
  "id": "Chapter2Section1-26",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-26",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "  Working as an insurance salesperson, Ilya earns a base salary and a commission on each new policy, so Ilya’s weekly income, I, depends on the number of new policies, n, he sells during the week. Last week he sold 3 new policies, and earned $760 for the week. The week before, he sold 5 new policies, and earned $920. Find an equation for f(n)=I, and interpret the meaning of the components of the equation.  The given information gives us two input-output pairs: and . We start by finding the rate of change. .  Keeping track of units can help us interpret this quantity. Income increased by $160 when the number of policies increased by 2, so the rate of change is $80 per policy; Ilya earns a commission of $80 for each policy sold during the week.  We can then solve for the initial value: Starting by substituting in the constant rate of change, we know; . When , , giving . This allows us to solve for : .  This value is the starting value for the function. This is Ilya’s income when n = 0, which means no new policies are sold. We can interpret this as Ilya’s base salary for the week, which does not depend upon the number of policies sold.  Writing the final equation: . Our final interpretation is: Ilya’s base salary is $520 per week and he earns an additional $80 commission for each policy sold each week.   "
},
{
  "id": "Chapter2Section1-27",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-27",
  "type": "Checkpoint",
  "number": "2.1.15",
  "title": "",
  "body": " Looking at the previous example: Determine the independent and dependent variables. Is this function one-to-one?  "
},
{
  "id": "Chapter2Section1-28",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-28",
  "type": "Checkpoint",
  "number": "2.1.16",
  "title": "",
  "body": " The balance in your college payment account, , is a function of the number of semesters, , you attend. Interpret the function in words. How many semesters of college can you pay for until this account is empty?  "
},
{
  "id": "Chapter2Section1-29",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-29",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "  Given the table below write a linear equation that represents the table values               , number of weeks  0  2  4  6     , number of rats  1000  1080  1160  1240    We can see from the table that the initial value of rats is 1000 so in the linear format .  Rather than solving for , we can notice from the table that the population goes up by 80 for every 2 weeks that pass. This rate is consistent from week 0, to week 2, 4, and 6. The rate of change is 80 rats per 2 weeks. This can be simplified to 40 rats per week and we can write as .  If you didn’t notice this from the table you could still solve for the slope using any two points from the table. For example, using and , rats per week.   "
},
{
  "id": "Chapter2Section1-30",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-30",
  "type": "Example",
  "number": "2.1.18",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Definition of Modeling    Definition of a linear function    Structure of a linear function    Increasing and Decreasing functions    Finding the vertical intercept     Finding the slope\/rate of change,     Interpreting linear functions      "
},
{
  "id": "Chapter2Section1-31",
  "level": "2",
  "url": "Chapter2Section1.html#Chapter2Section1-31",
  "type": "Checkpoint",
  "number": "2.1.19",
  "title": "",
  "body": " [Exercise Answers]    $1000 is saved each year.     ; Decreasing because .     (number of policies sold) is the independent variable and (weekly income as a function of policies sold) is the dependent variable. This function is one-to-one.    Your College account starts with $24,000 in it and you withdraw $8,000 each semester (or your account contains $24,000 and decreases by $8000 each semester). Solving gives . You can pay for 3 semesters before the money in this account is gone.     "
},
{
  "id": "Chapter2Section2",
  "level": "1",
  "url": "Chapter2Section2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Graphs of Linear Functions",
  "body": " Graphs of Linear Functions  When we are working with a new function, it is useful to know as much as we can about the function: its graph, where the function is zero, and any other special behaviors of the function. We will begin this exploration of linear functions with a look at graphs.   Basics of Graphing Linear Functions  When graphing a linear function, there are two basic ways to graph it:    By plotting points (at least 2) and drawing a line through the points    By using the initial value (output when ) and constant rate of change (slope)      Graph by plotting points.  In general, we evaluate the function at two or more inputs to find at least two points on the graph. Usually, it is best to pick input values that will “work nicely” in the equation. In this equation, multiples of 3 will work nicely due to the in the equation, and of course using to get the vertical intercept. Evaluating at 0, 3 and 6:   ,   ,  and .  These evaluations tell us that the points , , and lie on the graph of the line. Plotting these points and drawing a line through them gives us the graph.   Graph of    A decreasing line with dots marked on the line at 0 comma 5, 3 comma 3, and 6 comma 1       When using the initial value and rate of change to graph, we need to consider the graphical interpretation of these values. Remember the initial value of the function is the output when the input is zero, so in the equation , the graph includes the point . On the graph, this is the vertical intercept – the point where the graph crosses the vertical axis.  For the constant rate of change, it is helpful to recall that we calculated this value as   From a graph of a line, this tells us that if we divide the vertical difference of the function outputs by the horizontal difference of the inputs, we will obtain the constant rate of change, also called slope of the line. Notice that this ratio will calculate the same constant rate of change regardless of which two points we use.     An increasing line passing through 0 comma 1 and 2 comma 2 with a triangle drawn labeled run 2, rise 1, m=one half. Another triangle from 2 comma 2 to 6 comma 4 labeled run 4, rise 2, m=two fourths = one half. A third triangle from 4 comma 3 to 6 comma 4 with a triangle drawn labeled run 2, rise 1, m=one half.      Graphical Interpretation of a Linear Equation   Graphically, in the equation ,   is the vertical intercept of the graph and tells us we can start our graph at    is the slope of the line and tells us how much we need to increase our output every time we increase the input by 1. We can also generalize this idea to understand that for any change in the input, the corresponding change in the output will be times as large. I.e.   Once we have at least 2 points, we can sketch the line of the function by extending the graph of the line to the left and right.      Graph using the vertical intercept and slope.  The vertical intercept of the function is , giving us a point on the graph of the line.  The slope is . This tells us that for every 3 unit increase in the input , the output value will decrease by 2 units.  In graphing, we can use this by first plotting our vertical intercept on the graph, then using the slope to find a second point. From the initial value the slope tells us that if we move to the right 3, we will move down 2, moving us to the point . We can continue this again to find a third point at . Finally, extend the line to the left and right, containing these points.   Graph of    A decreasing line. From a point on the line at 0 comma 5 an arrow is drawn pointing 3 right, then from the end of that another arrow pointing down 2, ending at the point 3 comma 3 on the line. From there, another arrow is drawn pointing 3 right then another 2 down ending at the point 6 comma 1 on the line.        Consider that the slope could also be written as . Using , find another point on the graph that has a negative value.   In addition to understanding the basic behavior of a linear function (increasing or decreasing, recognizing the slope and vertical intercept), it is often helpful to know the horizontal intercept of the function – where it crosses the horizontal axis.   Horizontal Intercepts   The horizontal intercept of the function is where the graph crosses the horizontal axis. If a function has a horizontal intercept, you can always find it by solving .      Find the horizontal intercept of .  Setting the function equal to zero to find what input will put us on the horizontal axis,     Thus, the graph crosses the horizontal axis at (6,0)    There are two special cases of lines: a horizontal line and a vertical line. In a horizontal line like the one graphed below, notice that between any two points, the change in the outputs is 0. In the slope equation, the numerator will be 0, resulting in a slope of 0. Using a slope of 0 in the , the equation simplifies to .   A horizontal line    A horizontal line passing through 0 comma 2 and 2 comma 2     Notice a horizontal line has a vertical intercept, but no horizontal intercept (unless it’s the line ).  In the case of a vertical line, notice that between any two points, the change in the inputs is zero. In the slope equation, the denominator will be zero, and you may recall that we cannot divide by the zero; the slope of a vertical line is undefined. You might also notice that a vertical line is not a function. To write the equation of vertical line, we simply write input=value, like . Notice a vertical line has a horizontal intercept, but no vertical intercept (unless it’s the line ).   A vertical line    A vertical line passing through 2 comma 0 and 2 comma 2      Horizontal and Vertical Lines   Horizontal lines have equations of the form . Vertical lines have equations of the form .      Write an equation for the horizontal line graphed above.  This line would have equation .      Write an equation for the vertical line graphed above.  This line would have equation .      Parallel and Perpendicular Lines  When two lines are graphed together, the lines will be parallel if they are increasing at the same rate – if the constant rates of change are the same. In this case, the graphs will never cross (unless they’re the same line).   Parallel Lines   Two lines are parallel if the slopes are equal (or, if both lines are vertical).  In other words, given two linear equations and , the lines will be parallel if .      Find a line parallel to that passes through the point .  We know the line we’re looking for will have the same slope as the given line, . Using this and the given point, we can solve for the new line’s vertical intercept. Starting with , we can use the point to get , and thus .  The line we’re looking for is .    If two lines are not parallel, one other interesting possibility is that the lines are perpendicular, which means the lines form a right angle (90 degree angle – a square corner) where they meet. In this case, the slopes when multiplied together will equal -1. Solving for one slope leads us to the definition:   Perpendicular Lines   Given two linear equations and The lines will be perpendicular if , and so . We often say the slope of a perpendicular line is the “negative reciprocal” of the other line’s slope.      Find the slope of a line perpendicular to a line with:   a slope of 2    a slope of -4    a slope of      If the original line had slope 2, the perpendicular line’s slope would be . If the original line had slope -4, the perpendicular line’s slope would be . If the original line had slope , the perpendicular line’s slope would be .      Find the equation of a line perpendicular to and passing through the point ,  The original line has slope . The perpendicular line will have slope . Using this and the given point, we can find the equation for the line. , and at , , so .  The line we’re looking for is .     Given the line , find an equation for the line passing through that is:   parallel to     perpendicular to         A line passes through the points and . Find the equation of a perpendicular line that passes through the point .  From the two given points on the reference line, we can calculate the slope of that line: . The perpendicular line will have slope .  We can then solve for the vertical intercept that makes the line pass through the desired point: , then at , so . Giving the line .      Intersections of Lines  The graphs of two lines will intersect if they are not parallel. They will intersect at the point that satisfies both equations. To find this point when the equations are given as functions, we can solve for an input value so that . In other words, we can set the formulas for the lines equal, and solve for the input that satisfies the equation.    Find the intersection of the lines and .  Setting and solving for , we get   This tells us the lines intersect when the input is . We can then find the output value of the intersection point by evaluating either function at this input:   These lines intersect at the point . Looking at the graph, this result seems reasonable.     A line labeled h(t) passing through 0 comma negative 4 and 2 comma 2, and a line labeled j(t) passing through 0 comma 5 and 1 comma 4       Two parallel lines can also intersect if they happen to be the same line. In that case, they intersect at every point on the lines.   Using the previous example, answer the following for the function :   Vertical intercept coordinates    Horizontal intercepts coordinates    Slope    Is parallel or perpendicular to (or neither)?    Is an Increasing or Decreasing function (or neither)?    Write a transformation description from the identity toolkit function       Finding the intersection allows us to answer other questions as well, such as discovering when one function is larger than another.    Using the functions from the previous example, for what values of is ?  To answer this question, it is helpful first to know where the functions are equal, since that is the point where could switch from being greater to smaller than or vice-versa. From the previous example, we know the functions are equal at . By examining the graph, we can see that , the function with positive slope, is going to be larger than the other function to the right of the intersection. So when .      Conclusions   Important Topics of this Section      Methods for graphing linear functions    Horizontal intercepts of linear functions    Horizontal lines    Vertical lines    Parallel lines    Perpendicular lines    Intersecting lines        [Exercise Answers]    found by starting at the vertical intercept, going up 2 units and 3 in the negative horizontal direction. You could have also answered, or etc.    Parallel ; Perpendicular     Given :             Slope=3    Neither parallel nor perpendicular    Increasing function    Given the identity function, vertically stretch by 3 and shift down 4 units.          "
},
{
  "id": "Chapter2Section2-3-4",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-4",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  Graph by plotting points.  In general, we evaluate the function at two or more inputs to find at least two points on the graph. Usually, it is best to pick input values that will “work nicely” in the equation. In this equation, multiples of 3 will work nicely due to the in the equation, and of course using to get the vertical intercept. Evaluating at 0, 3 and 6:   ,   ,  and .  These evaluations tell us that the points , , and lie on the graph of the line. Plotting these points and drawing a line through them gives us the graph.   Graph of    A decreasing line with dots marked on the line at 0 comma 5, 3 comma 3, and 6 comma 1      "
},
{
  "id": "c2s2i6",
  "level": "2",
  "url": "Chapter2Section2.html#c2s2i6",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": "   An increasing line passing through 0 comma 1 and 2 comma 2 with a triangle drawn labeled run 2, rise 1, m=one half. Another triangle from 2 comma 2 to 6 comma 4 labeled run 4, rise 2, m=two fourths = one half. A third triangle from 4 comma 3 to 6 comma 4 with a triangle drawn labeled run 2, rise 1, m=one half.    "
},
{
  "id": "Chapter2Section2-3-9",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-9",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Graphical Interpretation of a Linear Equation.",
  "body": " Graphical Interpretation of a Linear Equation   Graphically, in the equation ,   is the vertical intercept of the graph and tells us we can start our graph at    is the slope of the line and tells us how much we need to increase our output every time we increase the input by 1. We can also generalize this idea to understand that for any change in the input, the corresponding change in the output will be times as large. I.e.   Once we have at least 2 points, we can sketch the line of the function by extending the graph of the line to the left and right.   "
},
{
  "id": "Chapter2Section2-3-10",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-10",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Graph using the vertical intercept and slope.  The vertical intercept of the function is , giving us a point on the graph of the line.  The slope is . This tells us that for every 3 unit increase in the input , the output value will decrease by 2 units.  In graphing, we can use this by first plotting our vertical intercept on the graph, then using the slope to find a second point. From the initial value the slope tells us that if we move to the right 3, we will move down 2, moving us to the point . We can continue this again to find a third point at . Finally, extend the line to the left and right, containing these points.   Graph of    A decreasing line. From a point on the line at 0 comma 5 an arrow is drawn pointing 3 right, then from the end of that another arrow pointing down 2, ending at the point 3 comma 3 on the line. From there, another arrow is drawn pointing 3 right then another 2 down ending at the point 6 comma 1 on the line.      "
},
{
  "id": "Chapter2Section2-3-11",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-11",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "",
  "body": " Consider that the slope could also be written as . Using , find another point on the graph that has a negative value.  "
},
{
  "id": "Chapter2Section2-3-13",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-13",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Horizontal Intercepts.",
  "body": " Horizontal Intercepts   The horizontal intercept of the function is where the graph crosses the horizontal axis. If a function has a horizontal intercept, you can always find it by solving .   "
},
{
  "id": "Chapter2Section2-3-14",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-14",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  Find the horizontal intercept of .  Setting the function equal to zero to find what input will put us on the horizontal axis,     Thus, the graph crosses the horizontal axis at (6,0)   "
},
{
  "id": "c2s2i3",
  "level": "2",
  "url": "Chapter2Section2.html#c2s2i3",
  "type": "Figure",
  "number": "2.2.10",
  "title": "",
  "body": " A horizontal line    A horizontal line passing through 0 comma 2 and 2 comma 2    "
},
{
  "id": "c2s2i4",
  "level": "2",
  "url": "Chapter2Section2.html#c2s2i4",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " A vertical line    A vertical line passing through 2 comma 0 and 2 comma 2    "
},
{
  "id": "Chapter2Section2-3-20",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-20",
  "type": "Definition",
  "number": "2.2.12",
  "title": "Horizontal and Vertical Lines.",
  "body": " Horizontal and Vertical Lines   Horizontal lines have equations of the form . Vertical lines have equations of the form .   "
},
{
  "id": "Chapter2Section2-3-21",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-21",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Write an equation for the horizontal line graphed above.  This line would have equation .   "
},
{
  "id": "Chapter2Section2-3-22",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-3-22",
  "type": "Example",
  "number": "2.2.14",
  "title": "",
  "body": "  Write an equation for the vertical line graphed above.  This line would have equation .   "
},
{
  "id": "Chapter2Section2-4-3",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-3",
  "type": "Definition",
  "number": "2.2.15",
  "title": "Parallel Lines.",
  "body": " Parallel Lines   Two lines are parallel if the slopes are equal (or, if both lines are vertical).  In other words, given two linear equations and , the lines will be parallel if .   "
},
{
  "id": "Chapter2Section2-4-4",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-4",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": "  Find a line parallel to that passes through the point .  We know the line we’re looking for will have the same slope as the given line, . Using this and the given point, we can solve for the new line’s vertical intercept. Starting with , we can use the point to get , and thus .  The line we’re looking for is .   "
},
{
  "id": "Chapter2Section2-4-6",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-6",
  "type": "Definition",
  "number": "2.2.17",
  "title": "Perpendicular Lines.",
  "body": " Perpendicular Lines   Given two linear equations and The lines will be perpendicular if , and so . We often say the slope of a perpendicular line is the “negative reciprocal” of the other line’s slope.   "
},
{
  "id": "Chapter2Section2-4-7",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-7",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Find the slope of a line perpendicular to a line with:   a slope of 2    a slope of -4    a slope of      If the original line had slope 2, the perpendicular line’s slope would be . If the original line had slope -4, the perpendicular line’s slope would be . If the original line had slope , the perpendicular line’s slope would be .   "
},
{
  "id": "Chapter2Section2-4-8",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-8",
  "type": "Example",
  "number": "2.2.19",
  "title": "",
  "body": "  Find the equation of a line perpendicular to and passing through the point ,  The original line has slope . The perpendicular line will have slope . Using this and the given point, we can find the equation for the line. , and at , , so .  The line we’re looking for is .   "
},
{
  "id": "Chapter2Section2-4-9",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-9",
  "type": "Checkpoint",
  "number": "2.2.20",
  "title": "",
  "body": " Given the line , find an equation for the line passing through that is:   parallel to     perpendicular to      "
},
{
  "id": "Chapter2Section2-4-10",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-4-10",
  "type": "Example",
  "number": "2.2.21",
  "title": "",
  "body": "  A line passes through the points and . Find the equation of a perpendicular line that passes through the point .  From the two given points on the reference line, we can calculate the slope of that line: . The perpendicular line will have slope .  We can then solve for the vertical intercept that makes the line pass through the desired point: , then at , so . Giving the line .   "
},
{
  "id": "Chapter2Section2-5-3",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-5-3",
  "type": "Example",
  "number": "2.2.22",
  "title": "",
  "body": "  Find the intersection of the lines and .  Setting and solving for , we get   This tells us the lines intersect when the input is . We can then find the output value of the intersection point by evaluating either function at this input:   These lines intersect at the point . Looking at the graph, this result seems reasonable.     A line labeled h(t) passing through 0 comma negative 4 and 2 comma 2, and a line labeled j(t) passing through 0 comma 5 and 1 comma 4      "
},
{
  "id": "Chapter2Section2-5-5",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-5-5",
  "type": "Checkpoint",
  "number": "2.2.24",
  "title": "",
  "body": " Using the previous example, answer the following for the function :   Vertical intercept coordinates    Horizontal intercepts coordinates    Slope    Is parallel or perpendicular to (or neither)?    Is an Increasing or Decreasing function (or neither)?    Write a transformation description from the identity toolkit function      "
},
{
  "id": "Chapter2Section2-5-7",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-5-7",
  "type": "Example",
  "number": "2.2.25",
  "title": "",
  "body": "  Using the functions from the previous example, for what values of is ?  To answer this question, it is helpful first to know where the functions are equal, since that is the point where could switch from being greater to smaller than or vice-versa. From the previous example, we know the functions are equal at . By examining the graph, we can see that , the function with positive slope, is going to be larger than the other function to the right of the intersection. So when .   "
},
{
  "id": "Chapter2Section2-6-2",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-6-2",
  "type": "Example",
  "number": "2.2.26",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Methods for graphing linear functions    Horizontal intercepts of linear functions    Horizontal lines    Vertical lines    Parallel lines    Perpendicular lines    Intersecting lines      "
},
{
  "id": "Chapter2Section2-6-3",
  "level": "2",
  "url": "Chapter2Section2.html#Chapter2Section2-6-3",
  "type": "Checkpoint",
  "number": "2.2.27",
  "title": "",
  "body": " [Exercise Answers]    found by starting at the vertical intercept, going up 2 units and 3 in the negative horizontal direction. You could have also answered, or etc.    Parallel ; Perpendicular     Given :             Slope=3    Neither parallel nor perpendicular    Increasing function    Given the identity function, vertically stretch by 3 and shift down 4 units.        "
},
{
  "id": "Chapter2Section3",
  "level": "1",
  "url": "Chapter2Section3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Modeling with Linear Functions",
  "body": " Modeling with Linear Functions  When modeling scenarios with a linear function and solving problems involving quantities changing linearly, we typically follow the same problem solving strategies that we would use for any type of function:   Problem Solving Strategy      Identify changing quantities, and then carefully and clearly define descriptive variables to represent those quantities. When appropriate, sketch a picture or define a coordinate system.    Carefully read the problem to identify important information. Look for information giving values for the variables, or values for parts of the functional model, like slope and initial value.    Carefully read the problem to identify what we are trying to find, identify, solve, or interpret.    Identify a solution pathway from the provided information to what we are trying to find. Often this will involve checking and tracking units, building a table or even finding a formula for the function being used to model the problem.    When needed, find a formula for the function.    Solve or evaluate using the formula you found for the desired quantities.    Reflect on whether your answer is reasonable for the given situation and whether it makes sense mathematically.    Clearly convey your result using appropriate units, and answer in full sentences when appropriate.         Emily saved up $3500 for her summer visit to Seattle. She anticipates spending $400 each week on rent, food, and fun. Find and interpret the horizontal intercept and determine a reasonable domain and range for this function.  In the problem, there are two changing quantities: time and money. The amount of money she has remaining while on vacation depends on how long she stays. We can define our variables, including units. Output: , money remaining, in dollars Input: , time, in weeks  Reading the problem, we identify two important values. The first, $3500, is the initial value for . The other value appears to be a rate of change – the units of dollars per week match the units of our output variable divided by our input variable. She is spending money each week, so you should recognize that the amount of money remaining is decreasing each week and the slope is negative. To answer the first question, looking for the horizontal intercept, it would be helpful to have an equation modeling this scenario. Using the intercept and slope provided in the problem, we can create the function: , .  To find the horizontal intercept, we set the output to zero, and solve for the input:    The horizontal intercept is 8.75 weeks. Since this represents the input value where the output will be zero, interpreting this, we could say: Emily will have no money left after 8.75 weeks.  When modeling any real life scenario with functions, there is typically a limited domain over which that model will be valid – almost no trend continues indefinitely. In this case, it certainly doesn’t make sense to talk about input values less than zero. It is also likely that this model is not valid after the horizontal intercept (unless Emily’s going to start using a credit card and go into debt).  The domain represents the set of input values and so the reasonable domain for this function is .  The range represents the set of output values and she starts with $3500 and ends with $0 after 8.75 weeks so the corresponding range is .     A database manager is loading a large table from backups. Getting impatient, she notices 1.2 million rows had been loaded. Ten minutes later, 2.5 million rows had been loaded. How much longer will she have to wait for all 80 million rows to load?     Jamal is choosing between two moving companies. The first, U-Haul, charges an up-front fee of $20, then 59 cents a mile. The second, Budget, charges an up-front fee of $16, then 63 cents a mile . When will U-Haul be the better choice for Jamal?  The two important quantities in this problem are the cost, and the number of miles that are driven. Since we have two companies to consider, we will define two functions:  Input: , miles driven  Outputs:   cost, in dollars, for renting from U-Haul,   cost, in dollars, for renting from Budget.  Reading the problem carefully, it appears that we were given an initial cost and a rate of change for each company. Since our outputs are measured in dollars but the costs per mile given in the problem are in cents, we will need to convert these quantities to match our desired units: $0.59 a mile for U-Haul, and $0.63 a mile for Budget.  Looking to what we’re trying to find, we want to know when U-Haul will be the better choice. Since all we have to make that decision from is the costs, we are looking for when U-Haul will cost less, or when . The solution pathway will lead us to find the equations for the two functions, find the intersection, then look to see where the function is smaller. Using the rates of change and initial charges, we can write the equations:    These graphs are sketched below, with drawn dashed.     A graph with two lines. A solid line passing through 0 comma 16 and 160 comma 116.8, and a dashed line passing through 0 comma 20 and 160 comma 114.4     To find the intersection, we set the equations equal and solve:      This tells us that the cost from the two companies will be the same if 100 miles are driven. Either by looking at the graph, or noting that is growing at a slower rate, we can conclude that U-Haul will be the cheaper price when more than 100 miles are driven.      A town’s population has been growing linearly. In 2004 the population was 6,200. By 2009 the population had grown to 8,100. If this trend continues,   Predict the population in 2013.    When will the population reach 15000?     The two changing quantities are the population and time. While we could use the actual year value as the input quantity, doing so tends to lead to very ugly equations, since the vertical intercept would correspond to the year 0, more than 2000 years ago! To make things a little nicer, and to make our lives easier too, we will define our input as years since 2004: Input: , years since 2004 Output: , the town’s population  The problem gives us two input-output pairs. Converting them to match our defined variables, the year 2004 would correspond to , giving the point . Notice that through our clever choice of variable definition, we have “given” ourselves the vertical intercept of the function. The year 2009 would correspond to , giving the point .  To predict the population in 2013, when , we would need an equation for the population. Likewise, to find when the population would reach 15000, we would need to solve for the input that would provide an output of 15000. Either way, we need an equation. To find it, we start by calculating the rate of change:   people per year  Since we already know the vertical intercept of the line, we can immediately write the equation:   To predict the population in 2013, we evaluate our function at : If the trend continues, our model predicts a population of 9,620 in 2013.  To find when the population will reach 15,000, we can set and solve for .     Our model predicts the population will reach 15,000 in a little more than 23 years after 2004, or somewhere around the year 2027.     [Exercise Solutions] Letting be the number of minutes since she got impatient, and be the number rows loaded, in millions, we have two points: and .  The slope is million rows per minute. We know the intercept, so we can write the equation:   To determine how long she will have to wait,we need to solve for when .   . She’ll have to wait another 606 minutes, about 10 hours.   "
},
{
  "id": "Chapter2Section3-3",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-3",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Problem Solving Strategy.",
  "body": " Problem Solving Strategy      Identify changing quantities, and then carefully and clearly define descriptive variables to represent those quantities. When appropriate, sketch a picture or define a coordinate system.    Carefully read the problem to identify important information. Look for information giving values for the variables, or values for parts of the functional model, like slope and initial value.    Carefully read the problem to identify what we are trying to find, identify, solve, or interpret.    Identify a solution pathway from the provided information to what we are trying to find. Often this will involve checking and tracking units, building a table or even finding a formula for the function being used to model the problem.    When needed, find a formula for the function.    Solve or evaluate using the formula you found for the desired quantities.    Reflect on whether your answer is reasonable for the given situation and whether it makes sense mathematically.    Clearly convey your result using appropriate units, and answer in full sentences when appropriate.      "
},
{
  "id": "Chapter2Section3-4",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-4",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Emily saved up $3500 for her summer visit to Seattle. She anticipates spending $400 each week on rent, food, and fun. Find and interpret the horizontal intercept and determine a reasonable domain and range for this function.  In the problem, there are two changing quantities: time and money. The amount of money she has remaining while on vacation depends on how long she stays. We can define our variables, including units. Output: , money remaining, in dollars Input: , time, in weeks  Reading the problem, we identify two important values. The first, $3500, is the initial value for . The other value appears to be a rate of change – the units of dollars per week match the units of our output variable divided by our input variable. She is spending money each week, so you should recognize that the amount of money remaining is decreasing each week and the slope is negative. To answer the first question, looking for the horizontal intercept, it would be helpful to have an equation modeling this scenario. Using the intercept and slope provided in the problem, we can create the function: , .  To find the horizontal intercept, we set the output to zero, and solve for the input:    The horizontal intercept is 8.75 weeks. Since this represents the input value where the output will be zero, interpreting this, we could say: Emily will have no money left after 8.75 weeks.  When modeling any real life scenario with functions, there is typically a limited domain over which that model will be valid – almost no trend continues indefinitely. In this case, it certainly doesn’t make sense to talk about input values less than zero. It is also likely that this model is not valid after the horizontal intercept (unless Emily’s going to start using a credit card and go into debt).  The domain represents the set of input values and so the reasonable domain for this function is .  The range represents the set of output values and she starts with $3500 and ends with $0 after 8.75 weeks so the corresponding range is .   "
},
{
  "id": "Chapter2Section3-5",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-5",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "",
  "body": " A database manager is loading a large table from backups. Getting impatient, she notices 1.2 million rows had been loaded. Ten minutes later, 2.5 million rows had been loaded. How much longer will she have to wait for all 80 million rows to load?  "
},
{
  "id": "Chapter2Section3-6",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-6",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Jamal is choosing between two moving companies. The first, U-Haul, charges an up-front fee of $20, then 59 cents a mile. The second, Budget, charges an up-front fee of $16, then 63 cents a mile . When will U-Haul be the better choice for Jamal?  The two important quantities in this problem are the cost, and the number of miles that are driven. Since we have two companies to consider, we will define two functions:  Input: , miles driven  Outputs:   cost, in dollars, for renting from U-Haul,   cost, in dollars, for renting from Budget.  Reading the problem carefully, it appears that we were given an initial cost and a rate of change for each company. Since our outputs are measured in dollars but the costs per mile given in the problem are in cents, we will need to convert these quantities to match our desired units: $0.59 a mile for U-Haul, and $0.63 a mile for Budget.  Looking to what we’re trying to find, we want to know when U-Haul will be the better choice. Since all we have to make that decision from is the costs, we are looking for when U-Haul will cost less, or when . The solution pathway will lead us to find the equations for the two functions, find the intersection, then look to see where the function is smaller. Using the rates of change and initial charges, we can write the equations:    These graphs are sketched below, with drawn dashed.     A graph with two lines. A solid line passing through 0 comma 16 and 160 comma 116.8, and a dashed line passing through 0 comma 20 and 160 comma 114.4     To find the intersection, we set the equations equal and solve:      This tells us that the cost from the two companies will be the same if 100 miles are driven. Either by looking at the graph, or noting that is growing at a slower rate, we can conclude that U-Haul will be the cheaper price when more than 100 miles are driven.   "
},
{
  "id": "Chapter2Section3-7",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-7",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": "  A town’s population has been growing linearly. In 2004 the population was 6,200. By 2009 the population had grown to 8,100. If this trend continues,   Predict the population in 2013.    When will the population reach 15000?     The two changing quantities are the population and time. While we could use the actual year value as the input quantity, doing so tends to lead to very ugly equations, since the vertical intercept would correspond to the year 0, more than 2000 years ago! To make things a little nicer, and to make our lives easier too, we will define our input as years since 2004: Input: , years since 2004 Output: , the town’s population  The problem gives us two input-output pairs. Converting them to match our defined variables, the year 2004 would correspond to , giving the point . Notice that through our clever choice of variable definition, we have “given” ourselves the vertical intercept of the function. The year 2009 would correspond to , giving the point .  To predict the population in 2013, when , we would need an equation for the population. Likewise, to find when the population would reach 15000, we would need to solve for the input that would provide an output of 15000. Either way, we need an equation. To find it, we start by calculating the rate of change:   people per year  Since we already know the vertical intercept of the line, we can immediately write the equation:   To predict the population in 2013, we evaluate our function at : If the trend continues, our model predicts a population of 9,620 in 2013.  To find when the population will reach 15,000, we can set and solve for .     Our model predicts the population will reach 15,000 in a little more than 23 years after 2004, or somewhere around the year 2027.   "
},
{
  "id": "Chapter2Section3-8",
  "level": "2",
  "url": "Chapter2Section3.html#Chapter2Section3-8",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "",
  "body": " [Exercise Solutions] Letting be the number of minutes since she got impatient, and be the number rows loaded, in millions, we have two points: and .  The slope is million rows per minute. We know the intercept, so we can write the equation:   To determine how long she will have to wait,we need to solve for when .   . She’ll have to wait another 606 minutes, about 10 hours.  "
},
{
  "id": "Chapter3Section1",
  "level": "1",
  "url": "Chapter3Section1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Power and Polynomial Functions",
  "body": " Power and Polynomial Functions   Introduction   Important Topics of this Section      Power Functions    Polynomials    Coefficients    Leading coefficient    Term    Leading Term    Degree of a polynomial    Long run behavior    Short run behavior       Suppose that a square is cut out of cardboard, with each side having length . If we wanted to write a function for the area of the square, with as the input and the area as output, you may recall that the area of a rectangle can be found by multiplying the length times the width. Since our shape is a square, the length and the width are the same, giving the formula:   Likewise, if we wanted a function for the volume of a cube with each side having some length , you may recall volume of a rectangular box can be found by multiplying length by width by height, which are all equal for a cube, giving the formula:   These two functions are examples of power functions, functions that are some power of the variable.   Power Function   A power function is a function that can be represented in the form where the base is a variable and the exponent, , is a constant number.      Which of our toolkit functions are power functions?  The constant and identity functions are power functions, since they can be written as and respectively.  The quadratic and cubic functions are both power functions with whole number powers: and .  The reciprocal and reciprocal squared functions are both power functions with negative whole number powers since they can be written as and .  The square and cube root functions are both power functions with fractional powers since they can be written as or .     What point(s) do the toolkit power functions have in common?     Characteristics of Power Functions  Shown below are the graphs of , all even whole number powers. Notice that all these graphs have a fairly similar shape, very similar to the quadratic toolkit, but as the power increases the graphs flatten somewhat near the origin, and become steeper away from the origin.   Graphs of even powered power functions.    Graphs of x^2, x^4 and x^6, all U-shaped and passing through the origin and 1 comma 1. x^6 is flattest near the origin and steepest away from the origin; x^2 is the most rounded near the origin and least steep away from the origin.     To describe the behavior as numbers become larger and larger, we use the idea of infinity. The symbol for positive infinity is , and for negative infinity. When we say that “ approaches infinity”, which can be symbolically written as , we are describing a behavior. We are saying that is getting large in the positive direction.  With the even power functions, as the becomes large in either the positive or negative direction, the output values become very large positive numbers. Equivalently, we could describe this by saying that as approaches positive or negative infinity, the values approach positive infinity. In symbolic form, we could write: as .  Shown below are the graphs of , and , all odd whole number powers. Notice all these graphs look similar to the cubic toolkit, but again as the power increases the graphs flatten near the origin and become steeper away from the origin.   Graphs of odd powered power functions.    Graphs of x^3, x^5 and x^7, all increasing quickly at first, flattening near the origin, then increasing again, passing through 1 comma 1. x^7 is flattest near the origin and steepest away from the origin; x^3 is the most rounded near the origin and least steep away from the origin.     For these odd power functions, as approaches negative infinity, approaches negative infinity. As approaches positive infinity, approaches positive infinity. In symbolic form we write: as and as .   Long Run Behavior   The behavior of the graph of a function as the input takes on large negative values, , and large positive values, , is referred to as the long run behavior of the function.      Describe the long run behavior of the graph of .  Since has a whole, even power, we would expect this function to behave somewhat like the quadratic function. As the input gets large positive or negative, we would expect the output to grow without bound in the positive direction. In symbolic form, as .      Describe the long run behavior of the graph of   Since this function has a whole odd power, we would expect it to behave somewhat like the cubic function. The negative in front of the will cause a vertical reflection, so as the inputs grow large positive, the outputs will grow large in the negative direction, and as the inputs grow large negative, the outputs will grow large in the positive direction. In symbolic form, for the long run behavior we would write: as and as .  You may use words or symbols to describe the long run behavior of these functions.     Describe in words and symbols the long run behavior of    Treatment of the rational and radical forms of power functions will be saved for later.    Polynomials  An oil pipeline bursts in the Gulf of Mexico, causing an oil slick in a roughly circular shape. The slick is currently 24 miles in radius, but that radius is increasing by 8 miles each week. If we wanted to write a formula for the area covered by the oil slick, we could do so by composing two functions together. The first is a formula for the radius, , of the spill, which depends on the number of weeks, , that have passed.  Hopefully you recognized that this relationship is linear:   We can combine this with the formula for the area, , of a circle:   Composing these functions gives a formula for the area in terms of weeks:   Multiplying this out gives the formula   This formula is an example of a polynomial. A polynomial is simply the sum of terms each consisting of a vertically stretched or compressed power function with non-negative whole number power.   Polynomial Function Terminology   A polynomial is function that can be written as   Each of the constants are called coefficients and can be positive, negative, or zero, and be whole numbers, decimals, or fractions.  A term of the polynomial is any one piece of the sum, that is any . Each individual term is a transformed power function.  The degree of the polynomial is the highest power of the variable that occurs in the polynomial.  The leading term is the term containing the highest power of the variable: the term with the highest degree.  The leading coefficient is the coefficient of the leading term.  Because of the definition of the “leading” term we often rearrange polynomials so that the powers are descending.       Identify the degree, leading term, and leading coefficient of these polynomials:                      For the function , the degree is 3, the highest power on . The leading term is the term containing that power, . The leading coefficient is the coefficient of that term, -4.    For , the degree is 5, the leading term is , and the leading coefficient is 5.    For , the degree is 3, the leading term is , so the leading coefficient is -1.         Long and Short Run Behavior   Long Run Behavior of Polynomials   For any polynomial, the long run behavior of the polynomial will match the long run behavior of the leading term.      What can we determine about the long run behavior and degree of the equation for the polynomial graphed here?     Polynomial graph increasing to 0 comma 2, decreasing to about 3.8 comma negative 2.1, then increasing.     Since the output grows large and positive as the inputs grow large and positive, we describe the long run behavior symbolically by writing: as . Similarly, as .  In words, we could say that as values approach infinity, the function values approach infinity, and as values approach negative infinity the function values approach negative infinity.  We can tell this graph has the shape of an odd degree power function which has not been reflected, so the degree of the polynomial creating this graph must be odd, and the leading coefficient would be positive.     Given the function use your algebra skills to determine the leading term, degree, and long run behavior of the function.   Characteristics of the graph such as vertical and horizontal intercepts are part of the short run behavior of the polynomial.  Like with all functions, the vertical intercept is where the graph crosses the vertical axis, and occurs when the input value is zero. Since a polynomial is a function, there can only be one vertical intercept, which occurs at the point . The horizontal intercepts occur at the input values that correspond with an output value of zero. It is possible to have more than one horizontal intercept.  Horizontal intercepts are also called zeros, or roots of the function.    Given the polynomial function , written in factored form for your convenience, determine the vertical and horizontal intercepts.  The vertical intercept occurs when the input is zero. .  The graph crosses the vertical axis at the point .  The horizontal intercepts occur when the output is zero. which is true when , or . has zeros, or roots, , and .  The graph crosses the horizontal axis at the points , and .    Notice that the polynomial in the previous example, which would be degree three if multiplied out, had three horizontal intercepts.   Intercepts of Polynomials   A polynomial of degree will have at most horizontal intercepts.     Given the function , determine the roots and vertical intercept of the function .    [Exercise Answers]    and are common to all power functions.    As approaches positive and negative infinity, approaches negative infinity: because of the vertical flip.    The leading term is , so it is a degree 3 polynomial.    As approaches infinity (or gets very large in the positive direction) approaches infinity; as approaches negative infinity (or gets very large in the negative direction) approaches negative infinity. (Basically the long run behavior is the same as the cubic function).    Horizontal intercepts are , and , and the vertical intercept is .       "
},
{
  "id": "Chapter3Section1-2-2",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-2-2",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Power Functions    Polynomials    Coefficients    Leading coefficient    Term    Leading Term    Degree of a polynomial    Long run behavior    Short run behavior      "
},
{
  "id": "Chapter3Section1-2-6",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-2-6",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Power Function.",
  "body": " Power Function   A power function is a function that can be represented in the form where the base is a variable and the exponent, , is a constant number.   "
},
{
  "id": "Chapter3Section1-2-7",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-2-7",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Which of our toolkit functions are power functions?  The constant and identity functions are power functions, since they can be written as and respectively.  The quadratic and cubic functions are both power functions with whole number powers: and .  The reciprocal and reciprocal squared functions are both power functions with negative whole number powers since they can be written as and .  The square and cube root functions are both power functions with fractional powers since they can be written as or .   "
},
{
  "id": "Chapter3Section1-2-8",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-2-8",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": " What point(s) do the toolkit power functions have in common?  "
},
{
  "id": "c3s1i1",
  "level": "2",
  "url": "Chapter3Section1.html#c3s1i1",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Graphs of even powered power functions.    Graphs of x^2, x^4 and x^6, all U-shaped and passing through the origin and 1 comma 1. x^6 is flattest near the origin and steepest away from the origin; x^2 is the most rounded near the origin and least steep away from the origin.    "
},
{
  "id": "c3s1i2",
  "level": "2",
  "url": "Chapter3Section1.html#c3s1i2",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " Graphs of odd powered power functions.    Graphs of x^3, x^5 and x^7, all increasing quickly at first, flattening near the origin, then increasing again, passing through 1 comma 1. x^7 is flattest near the origin and steepest away from the origin; x^3 is the most rounded near the origin and least steep away from the origin.    "
},
{
  "id": "Chapter3Section1-3-9",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-3-9",
  "type": "Definition",
  "number": "3.1.7",
  "title": "Long Run Behavior.",
  "body": " Long Run Behavior   The behavior of the graph of a function as the input takes on large negative values, , and large positive values, , is referred to as the long run behavior of the function.   "
},
{
  "id": "Chapter3Section1-3-10",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-3-10",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Describe the long run behavior of the graph of .  Since has a whole, even power, we would expect this function to behave somewhat like the quadratic function. As the input gets large positive or negative, we would expect the output to grow without bound in the positive direction. In symbolic form, as .   "
},
{
  "id": "Chapter3Section1-3-11",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-3-11",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Describe the long run behavior of the graph of   Since this function has a whole odd power, we would expect it to behave somewhat like the cubic function. The negative in front of the will cause a vertical reflection, so as the inputs grow large positive, the outputs will grow large in the negative direction, and as the inputs grow large negative, the outputs will grow large in the positive direction. In symbolic form, for the long run behavior we would write: as and as .  You may use words or symbols to describe the long run behavior of these functions.   "
},
{
  "id": "Chapter3Section1-3-12",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-3-12",
  "type": "Checkpoint",
  "number": "3.1.10",
  "title": "",
  "body": " Describe in words and symbols the long run behavior of   "
},
{
  "id": "Chapter3Section1-4-8",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-4-8",
  "type": "Definition",
  "number": "3.1.11",
  "title": "Polynomial Function Terminology.",
  "body": " Polynomial Function Terminology   A polynomial is function that can be written as   Each of the constants are called coefficients and can be positive, negative, or zero, and be whole numbers, decimals, or fractions.  A term of the polynomial is any one piece of the sum, that is any . Each individual term is a transformed power function.  The degree of the polynomial is the highest power of the variable that occurs in the polynomial.  The leading term is the term containing the highest power of the variable: the term with the highest degree.  The leading coefficient is the coefficient of the leading term.  Because of the definition of the “leading” term we often rearrange polynomials so that the powers are descending.    "
},
{
  "id": "Chapter3Section1-4-9",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-4-9",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Identify the degree, leading term, and leading coefficient of these polynomials:                      For the function , the degree is 3, the highest power on . The leading term is the term containing that power, . The leading coefficient is the coefficient of that term, -4.    For , the degree is 5, the leading term is , and the leading coefficient is 5.    For , the degree is 3, the leading term is , so the leading coefficient is -1.      "
},
{
  "id": "Chapter3Section1-5-2",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-2",
  "type": "Definition",
  "number": "3.1.13",
  "title": "Long Run Behavior of Polynomials.",
  "body": " Long Run Behavior of Polynomials   For any polynomial, the long run behavior of the polynomial will match the long run behavior of the leading term.   "
},
{
  "id": "Chapter3Section1-5-3",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-3",
  "type": "Example",
  "number": "3.1.14",
  "title": "",
  "body": "  What can we determine about the long run behavior and degree of the equation for the polynomial graphed here?     Polynomial graph increasing to 0 comma 2, decreasing to about 3.8 comma negative 2.1, then increasing.     Since the output grows large and positive as the inputs grow large and positive, we describe the long run behavior symbolically by writing: as . Similarly, as .  In words, we could say that as values approach infinity, the function values approach infinity, and as values approach negative infinity the function values approach negative infinity.  We can tell this graph has the shape of an odd degree power function which has not been reflected, so the degree of the polynomial creating this graph must be odd, and the leading coefficient would be positive.   "
},
{
  "id": "Chapter3Section1-5-4",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-4",
  "type": "Checkpoint",
  "number": "3.1.16",
  "title": "",
  "body": " Given the function use your algebra skills to determine the leading term, degree, and long run behavior of the function.  "
},
{
  "id": "Chapter3Section1-5-8",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-8",
  "type": "Example",
  "number": "3.1.17",
  "title": "",
  "body": "  Given the polynomial function , written in factored form for your convenience, determine the vertical and horizontal intercepts.  The vertical intercept occurs when the input is zero. .  The graph crosses the vertical axis at the point .  The horizontal intercepts occur when the output is zero. which is true when , or . has zeros, or roots, , and .  The graph crosses the horizontal axis at the points , and .   "
},
{
  "id": "Chapter3Section1-5-10",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-10",
  "type": "Definition",
  "number": "3.1.18",
  "title": "Intercepts of Polynomials.",
  "body": " Intercepts of Polynomials   A polynomial of degree will have at most horizontal intercepts.   "
},
{
  "id": "Chapter3Section1-5-11",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-11",
  "type": "Checkpoint",
  "number": "3.1.19",
  "title": "",
  "body": " Given the function , determine the roots and vertical intercept of the function .  "
},
{
  "id": "Chapter3Section1-5-12",
  "level": "2",
  "url": "Chapter3Section1.html#Chapter3Section1-5-12",
  "type": "Checkpoint",
  "number": "3.1.20",
  "title": "",
  "body": " [Exercise Answers]    and are common to all power functions.    As approaches positive and negative infinity, approaches negative infinity: because of the vertical flip.    The leading term is , so it is a degree 3 polynomial.    As approaches infinity (or gets very large in the positive direction) approaches infinity; as approaches negative infinity (or gets very large in the negative direction) approaches negative infinity. (Basically the long run behavior is the same as the cubic function).    Horizontal intercepts are , and , and the vertical intercept is .     "
},
{
  "id": "Chapter3Section2",
  "level": "1",
  "url": "Chapter3Section2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Quadratic Functions",
  "body": " Quadratic Functions   Introduction  In this section, we will explore the family of 2nd degree polynomials, the quadratic functions. While they share many characteristics of polynomials in general, the calculations involved in working with quadratics is typically a little simpler, which makes them a good place to start our exploration of short run behavior. In addition, quadratics commonly arise from problems involving area and projectile motion, providing some interesting applications.   Important Topics of this Section      Quadratic functions    Standard form    Transformation form\/Vertex form    Vertex as a maximum \/ Vertex as a minimum    Short run behavior    Vertex \/ Horizontal and Vertical intercepts    Quadratic formula         A backyard farmer wants to enclose a rectangular space for a new garden. She has purchased 80 feet of wire fencing to enclose 3 sides, and will put the 4th side against the backyard fence. Find a formula for the area enclosed by the fence if the sides of fencing perpendicular to the existing fence have length .  In a scenario like this involving geometry, it is often helpful to draw a picture. It might also be helpful to introduce a temporary variable, , to represent the side of fencing parallel to the 4th side or backyard fence.   A rectangular garden    A rectangular area is labeled Backyard. Inside of it is a smaller rectangle labeled Garden, with one side up against the edge of the backyard. The dimensions of the garden are labeled W and L.     Since we know we only have 80 feet of fence available, we know that , or more simply, . This allows us to represent the width, , in terms of : .  Now we are ready to write an equation for the area the fence encloses. We know the area of a rectangle is length multiplied by width, so   Letting be the function that calculates the area within the fence in terms of the length of the enclosure,     This formula represents the area of the fence in terms of the variable length .      Short run Behavior: Vertex  We now explore the interesting features of the graphs of quadratics. In addition to intercepts, quadratics have an interesting feature where they change direction, called the vertex. You probably noticed that all quadratics are related to transformations of the basic quadratic function .    Write an equation for the quadratic graphed below as a transformation of , then expand the formula and simplify terms to write the equation in standard polynomial form.   Graph of    A U-shaped parabola with vertex at negative 2 comma negative 3 and passing through 0 comma negative 1.     We can see the graph is the basic quadratic shifted to the left 2 and down 3, giving a formula in the form . By plugging in a point that falls on the grid, such as , we can solve for the stretch factor:         Written as a transformation, the equation for this formula is . To write this in standard polynomial form, we can expand the formula and simplify terms:          Forms of Quadratic Functions   The standard form of a quadratic function is The vertex form of a quadratic function is The vertex of the quadratic function is located at (h, k), where h and k are the numbers in the vertex form of the function.    In the previous example, we saw that it is possible to rewrite a quadratic function given in vertex form and rewrite it in standard form by expanding the formula. It would be useful to reverse this process, since the vertex form reveals the vertex.  Expanding out the general vertex form of a quadratic gives:        This should be equal to the standard form of the quadratic:   The second degree terms are already equal. For the linear terms to be equal, the coefficients must be equal: , so   This provides us a method to determine the horizontal shift of the quadratic from the standard form. We could likewise set the constant terms equal to find: , so In practice, though, it is usually easier to remember that is the output value of the function when the input is , so .   Finding the Vertex of a Quadratic   For a quadratic given in standard form, the vertex is located at: ,       Find the vertex of the quadratic . Rewrite the quadratic into vertex form.  The horizontal coordinate of the vertex will be at The vertical coordinate of the vertex will be at   Rewriting into vertex form, the stretch factor will be the same as the in the original quadratic. Using the vertex to determine the shifts,      Given the equation write the equation in standard form and then in vertex form.   As an alternative to using a formula for finding the vertex, the equation can also be written into vertex form by completing the square. This process is most easily explained through example. In most cases, using the formula for finding the vertex will be quicker and easier than completing the square, but completing the square is a useful technique when faced with some other algebraic problems.    Rewrite into vertex form by completing the square.  We start by factoring the leading coefficient from the quadratic and linear terms. Next, we are going to add something inside the parentheses so that the quadratic inside the parentheses becomes a perfect square. In other words, we are looking for values p and q so that .  Notice that if multiplied out on the right, the middle term would be , so must be half of the middle term on the left; . In that case, must be .   Now, we can’t just add 9 into the expression – that would change the value of the expression. In fact, adding 9 inside the parentheses actually adds 18 to the expression, since the 2 outside the parentheses will distribute. To keep the expression balanced, we can subtract 18.   Simplifying, we are left with vertex form.     In addition to enabling us to more easily graph a quadratic written in standard form, finding the vertex serves another important purpose – it allows us to determine the maximum or minimum value of the function, depending on which way the graph opens.    Returning to our backyard farmer from the beginning of the section, what dimensions should she make her garden to maximize the enclosed area?  Earlier we determined the area she could enclose with 80 feet of fencing on three sides was given by the equation . Notice that quadratic has been vertically reflected, since the coefficient on the squared term is negative, so the graph will open downwards, and the vertex will be a maximum value for the area.  In finding the vertex, we take care since the equation is not written in standard polynomial form with decreasing powers. But we know that is the coefficient on the squared term, so , , and . Finding the vertex: ,   The maximum value of the function is an area of 800 square feet, which occurs when feet. When the shorter sides are 20 feet, that leaves 40 feet of fencing for the longer side. To maximize the area, she should enclose the garden such that the two shorter sides have length 20 feet, and the longer side parallel to the existing fence has length 40 feet.      A local newspaper currently has 84,000 subscribers, at a quarterly charge of $30. Market research has suggested that if they raised the price to $32, they would lose 5,000 subscribers. Assuming that subscriptions are linearly related to the price, what price should the newspaper charge for a quarterly subscription to maximize their revenue?  Revenue is the amount of money a company brings in. In this case, the revenue can be found by multiplying the charge per subscription times the number of subscribers. We can introduce variables, for charge per subscription and for the number subscribers, giving us the equation   Since the number of subscribers changes with the price, we need to find a relationship between the variables. We know that currently and , and that if they raise the price to $32 they would lose 5,000 subscribers, giving a second pair of values, and . From this we can find a linear equation relating the two quantities. Treating as the input and as the output, the equation will have form . The slope will be   This tells us the paper will lose 2,500 subscribers for each dollar they raise the price. We can then solve for the vertical intercept. Starting with what we know: Plugging in the point and gets us Solving this for gets   This gives us the linear equation relating cost and subscribers. We now return to our revenue equation. Since we substitute the equation for from above to get Expanding this equation gives   We now have a quadratic equation for revenue as a function of the subscription charge. To find the price that will maximize revenue for the newspaper, we can find the vertex:   The model tells us that the maximum revenue will occur if the newspaper charges $31.80 for a subscription. To find what the maximum revenue is, we can evaluate the revenue equation:       Short run Behavior: Intercepts  As with any function, we can find the vertical intercepts of a quadratic by evaluating the function at an input of zero, and we can find the horizontal intercepts by solving for when the output will be zero. Notice that depending upon the location of the graph, we might have zero, one, or two horizontal intercepts.   A quadratic function with zero horizontal intercepts    A U-shaped parabola opening upwards with vertex at 2 comma 1 with no horizontal intercepts.      A quadratic function with one horizontal intercept    A U-shaped parabola opening upwards with one horizontal intercept at the vertex at 2 comma 0.      A quadratic function with two horizontal intercepts    A U-shaped parabola opening upwards with vertex at 2 comma negative 1 with two horizontal intercepts at 1 comma 0 and 3 comma 0       Find the vertical and horizontal intercepts of the quadratic   We can find the vertical intercept by evaluating the function at an input of zero: so the function has a vertical intercept at   For the horizontal intercepts, we solve for when the output will be zero. So we must solve the equation   In this case, the quadratic can be factored easily enough, providing the simplest method for solution So the roots must occur when either or when The first equation is true when and the second is true when So, the function has horisontal intercepts at and .    Notice that in the standard form of a quadratic, the constant term reveals the vertical intercept of the graph.    Find the horizontal intercepts of the quadratic   Again we must solve for when the output will be zero   Since the quadratic is not easily factor-able in this case, we solve for the intercepts by first rewriting the quadratic into vertex form. , . So we can rewrite in vertex form as   Now we can solve for when the output will be zero algebraically: adding 6 to both sides yields Dividing both sides by 2 gives Now, must notice that there are two possible solutions to this equation, when and when Solving each of these equations gives us the solutions and .  So, the graph has horizontal intercepts at and .     Find the Vertical and Horizontal intercepts (if they exist) of the function .   The process in the last example is done commonly enough that sometimes people find it easier to solve the problem once in general and remember the formula for the result, rather than repeating the process each time. Based on our previous work we showed that any quadratic in standard form can be written into transformation form as: .  Solving for the horizontal intercepts using this general equation gives: To start to solve for , we move the constants to the other side: Dividing both sides by gives We can find a common denominator to combine fractions on the left: which becomes We then take the square root of both sides of the equation, remembering that both the positive and negative square root are solutions to the equation: Since it is true that we can rewrite the left hand side to get: which further simplifies to: Subtracting from both sides give: We can then combine the fractions to get the solutions:    Quadratic Formula   For a quadratic function given in standard form , the quadratic formula gives the horizontal intercepts of the graph of this function. The horizontal intercepts occur when:       A ball is thrown upwards from the top of a 40-foot-tall building at a speed of 80 feet per second. The ball’s height above ground can be modeled by the equation . What is the maximum height of the ball? When does the ball hit the ground?  To find the maximum height of the ball, we would need to know the vertex of the quadratic function. ,   The ball reaches a maximum height of 140 feet after 2.5 seconds. To find when the ball hits the ground, we need to determine when the height is zero – when . While we could do this using the vertex form of the quadratic, we can also use the quadratic formula. when   Since the square root does not simplify nicely, we can use a calculator to approximate the values of the solutions: or .  The second answer is outside the reasonable domain of our model (since it represents a time before the ball was thrown), so we conclude the ball will hit the ground after about 5.458 seconds.     For these two equations determine if the vertex will be a maximum value or a minimum value.                [Exercise Answers]    in Standard form; Finding the vertex, . . in Vertex form.    Vertical intercept at , No horizontal intercepts since the vertex is above the -axis and the graph opens upwards.       Vertex is a minimum value, since and the graph opens upwards.    Vertex is a maximum value, since and the graph opens downward.          "
},
{
  "id": "Chapter3Section2-2-3",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-2-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Quadratic functions    Standard form    Transformation form\/Vertex form    Vertex as a maximum \/ Vertex as a minimum    Short run behavior    Vertex \/ Horizontal and Vertical intercepts    Quadratic formula      "
},
{
  "id": "Chapter3Section2-2-4",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-2-4",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  A backyard farmer wants to enclose a rectangular space for a new garden. She has purchased 80 feet of wire fencing to enclose 3 sides, and will put the 4th side against the backyard fence. Find a formula for the area enclosed by the fence if the sides of fencing perpendicular to the existing fence have length .  In a scenario like this involving geometry, it is often helpful to draw a picture. It might also be helpful to introduce a temporary variable, , to represent the side of fencing parallel to the 4th side or backyard fence.   A rectangular garden    A rectangular area is labeled Backyard. Inside of it is a smaller rectangle labeled Garden, with one side up against the edge of the backyard. The dimensions of the garden are labeled W and L.     Since we know we only have 80 feet of fence available, we know that , or more simply, . This allows us to represent the width, , in terms of : .  Now we are ready to write an equation for the area the fence encloses. We know the area of a rectangle is length multiplied by width, so   Letting be the function that calculates the area within the fence in terms of the length of the enclosure,     This formula represents the area of the fence in terms of the variable length .   "
},
{
  "id": "Chapter3Section2-3-3",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-3",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Write an equation for the quadratic graphed below as a transformation of , then expand the formula and simplify terms to write the equation in standard polynomial form.   Graph of    A U-shaped parabola with vertex at negative 2 comma negative 3 and passing through 0 comma negative 1.     We can see the graph is the basic quadratic shifted to the left 2 and down 3, giving a formula in the form . By plugging in a point that falls on the grid, such as , we can solve for the stretch factor:         Written as a transformation, the equation for this formula is . To write this in standard polynomial form, we can expand the formula and simplify terms:        "
},
{
  "id": "Chapter3Section2-3-4",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-4",
  "type": "Definition",
  "number": "3.2.6",
  "title": "Forms of Quadratic Functions.",
  "body": " Forms of Quadratic Functions   The standard form of a quadratic function is The vertex form of a quadratic function is The vertex of the quadratic function is located at (h, k), where h and k are the numbers in the vertex form of the function.   "
},
{
  "id": "Chapter3Section2-3-12",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-12",
  "type": "Definition",
  "number": "3.2.7",
  "title": "Finding the Vertex of a Quadratic.",
  "body": " Finding the Vertex of a Quadratic   For a quadratic given in standard form, the vertex is located at: ,    "
},
{
  "id": "Chapter3Section2-3-13",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-13",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Find the vertex of the quadratic . Rewrite the quadratic into vertex form.  The horizontal coordinate of the vertex will be at The vertical coordinate of the vertex will be at   Rewriting into vertex form, the stretch factor will be the same as the in the original quadratic. Using the vertex to determine the shifts,    "
},
{
  "id": "Chapter3Section2-3-14",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-14",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "",
  "body": " Given the equation write the equation in standard form and then in vertex form.  "
},
{
  "id": "Chapter3Section2-3-16",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-16",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Rewrite into vertex form by completing the square.  We start by factoring the leading coefficient from the quadratic and linear terms. Next, we are going to add something inside the parentheses so that the quadratic inside the parentheses becomes a perfect square. In other words, we are looking for values p and q so that .  Notice that if multiplied out on the right, the middle term would be , so must be half of the middle term on the left; . In that case, must be .   Now, we can’t just add 9 into the expression – that would change the value of the expression. In fact, adding 9 inside the parentheses actually adds 18 to the expression, since the 2 outside the parentheses will distribute. To keep the expression balanced, we can subtract 18.   Simplifying, we are left with vertex form.    "
},
{
  "id": "Chapter3Section2-3-18",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-18",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "  Returning to our backyard farmer from the beginning of the section, what dimensions should she make her garden to maximize the enclosed area?  Earlier we determined the area she could enclose with 80 feet of fencing on three sides was given by the equation . Notice that quadratic has been vertically reflected, since the coefficient on the squared term is negative, so the graph will open downwards, and the vertex will be a maximum value for the area.  In finding the vertex, we take care since the equation is not written in standard polynomial form with decreasing powers. But we know that is the coefficient on the squared term, so , , and . Finding the vertex: ,   The maximum value of the function is an area of 800 square feet, which occurs when feet. When the shorter sides are 20 feet, that leaves 40 feet of fencing for the longer side. To maximize the area, she should enclose the garden such that the two shorter sides have length 20 feet, and the longer side parallel to the existing fence has length 40 feet.   "
},
{
  "id": "Chapter3Section2-3-19",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-3-19",
  "type": "Example",
  "number": "3.2.12",
  "title": "",
  "body": "  A local newspaper currently has 84,000 subscribers, at a quarterly charge of $30. Market research has suggested that if they raised the price to $32, they would lose 5,000 subscribers. Assuming that subscriptions are linearly related to the price, what price should the newspaper charge for a quarterly subscription to maximize their revenue?  Revenue is the amount of money a company brings in. In this case, the revenue can be found by multiplying the charge per subscription times the number of subscribers. We can introduce variables, for charge per subscription and for the number subscribers, giving us the equation   Since the number of subscribers changes with the price, we need to find a relationship between the variables. We know that currently and , and that if they raise the price to $32 they would lose 5,000 subscribers, giving a second pair of values, and . From this we can find a linear equation relating the two quantities. Treating as the input and as the output, the equation will have form . The slope will be   This tells us the paper will lose 2,500 subscribers for each dollar they raise the price. We can then solve for the vertical intercept. Starting with what we know: Plugging in the point and gets us Solving this for gets   This gives us the linear equation relating cost and subscribers. We now return to our revenue equation. Since we substitute the equation for from above to get Expanding this equation gives   We now have a quadratic equation for revenue as a function of the subscription charge. To find the price that will maximize revenue for the newspaper, we can find the vertex:   The model tells us that the maximum revenue will occur if the newspaper charges $31.80 for a subscription. To find what the maximum revenue is, we can evaluate the revenue equation:    "
},
{
  "id": "c3s2i3",
  "level": "2",
  "url": "Chapter3Section2.html#c3s2i3",
  "type": "Figure",
  "number": "3.2.13",
  "title": "",
  "body": " A quadratic function with zero horizontal intercepts    A U-shaped parabola opening upwards with vertex at 2 comma 1 with no horizontal intercepts.    "
},
{
  "id": "c3s2i4",
  "level": "2",
  "url": "Chapter3Section2.html#c3s2i4",
  "type": "Figure",
  "number": "3.2.14",
  "title": "",
  "body": " A quadratic function with one horizontal intercept    A U-shaped parabola opening upwards with one horizontal intercept at the vertex at 2 comma 0.    "
},
{
  "id": "c3s2i5",
  "level": "2",
  "url": "Chapter3Section2.html#c3s2i5",
  "type": "Figure",
  "number": "3.2.15",
  "title": "",
  "body": " A quadratic function with two horizontal intercepts    A U-shaped parabola opening upwards with vertex at 2 comma negative 1 with two horizontal intercepts at 1 comma 0 and 3 comma 0    "
},
{
  "id": "Chapter3Section2-4-6",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-6",
  "type": "Example",
  "number": "3.2.16",
  "title": "",
  "body": "  Find the vertical and horizontal intercepts of the quadratic   We can find the vertical intercept by evaluating the function at an input of zero: so the function has a vertical intercept at   For the horizontal intercepts, we solve for when the output will be zero. So we must solve the equation   In this case, the quadratic can be factored easily enough, providing the simplest method for solution So the roots must occur when either or when The first equation is true when and the second is true when So, the function has horisontal intercepts at and .   "
},
{
  "id": "Chapter3Section2-4-8",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-8",
  "type": "Example",
  "number": "3.2.17",
  "title": "",
  "body": "  Find the horizontal intercepts of the quadratic   Again we must solve for when the output will be zero   Since the quadratic is not easily factor-able in this case, we solve for the intercepts by first rewriting the quadratic into vertex form. , . So we can rewrite in vertex form as   Now we can solve for when the output will be zero algebraically: adding 6 to both sides yields Dividing both sides by 2 gives Now, must notice that there are two possible solutions to this equation, when and when Solving each of these equations gives us the solutions and .  So, the graph has horizontal intercepts at and .   "
},
{
  "id": "Chapter3Section2-4-9",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-9",
  "type": "Checkpoint",
  "number": "3.2.18",
  "title": "",
  "body": " Find the Vertical and Horizontal intercepts (if they exist) of the function .  "
},
{
  "id": "Chapter3Section2-4-12",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-12",
  "type": "Definition",
  "number": "3.2.19",
  "title": "Quadratic Formula.",
  "body": " Quadratic Formula   For a quadratic function given in standard form , the quadratic formula gives the horizontal intercepts of the graph of this function. The horizontal intercepts occur when:    "
},
{
  "id": "Chapter3Section2-4-13",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-13",
  "type": "Example",
  "number": "3.2.20",
  "title": "",
  "body": "  A ball is thrown upwards from the top of a 40-foot-tall building at a speed of 80 feet per second. The ball’s height above ground can be modeled by the equation . What is the maximum height of the ball? When does the ball hit the ground?  To find the maximum height of the ball, we would need to know the vertex of the quadratic function. ,   The ball reaches a maximum height of 140 feet after 2.5 seconds. To find when the ball hits the ground, we need to determine when the height is zero – when . While we could do this using the vertex form of the quadratic, we can also use the quadratic formula. when   Since the square root does not simplify nicely, we can use a calculator to approximate the values of the solutions: or .  The second answer is outside the reasonable domain of our model (since it represents a time before the ball was thrown), so we conclude the ball will hit the ground after about 5.458 seconds.   "
},
{
  "id": "Chapter3Section2-4-14",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-14",
  "type": "Checkpoint",
  "number": "3.2.21",
  "title": "",
  "body": " For these two equations determine if the vertex will be a maximum value or a minimum value.              "
},
{
  "id": "Chapter3Section2-4-15",
  "level": "2",
  "url": "Chapter3Section2.html#Chapter3Section2-4-15",
  "type": "Checkpoint",
  "number": "3.2.22",
  "title": "",
  "body": " [Exercise Answers]    in Standard form; Finding the vertex, . . in Vertex form.    Vertical intercept at , No horizontal intercepts since the vertex is above the -axis and the graph opens upwards.       Vertex is a minimum value, since and the graph opens upwards.    Vertex is a maximum value, since and the graph opens downward.        "
},
{
  "id": "Chapter3Section3",
  "level": "1",
  "url": "Chapter3Section3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Graphs and Roots of Polynomial Functions",
  "body": " Graphs and Roots of Polynomial Functions   Introduction  In the previous section, we explored the short run behavior of quadratics, a special case of polynomials. In this section, we will explore the short run behavior of polynomials in general.   Important Topics of this Section      Short Run Behavior   Intercepts (Horizontal and Vertical)       Methods to find Horizontal intercepts   Factoring Methods    Factored Forms    Technology       Graphical Behavior at intercepts    Single, Double and Triple zeros (or multiplicity 1, 2, and 3 behaviors)    Solving polynomial inequalities using test values and graphing techniques    Writing equations using intercepts    Estimating extrema         Intercepts  As with any function, the vertical intercept can be found by evaluating the function at an input of zero. Since this is evaluation, it is relatively easy to do it for a polynomial of any degree.  To find horizontal intercepts, we need to solve for when the output will be zero. For general polynomials, this can be a challenging prospect. While quadratics can be solved using the relatively simple quadratic formula, the corresponding formulas for cubic and 4th degree polynomials are not simple enough to remember, and formulas do not exist for general higher-degree polynomials. Consequently, we will limit ourselves to three cases:    When the polynomial can be factored using known methods: greatest common factor and trinomial factoring.    When the polynomial is given in factored form.    Using technology to determine the intercepts.      Find the horizontal intercepts of .  We can attempt to factor this polynomial to find solutions for . That is, we are finding the values such that . Factoring out the greatest common factor of from the left hand side yields . Factoring the polynomial inside the parenthesis gives us . Then, we set each of these factors equal to zero to find our solutions. Setting we get the solution If then and this has the two solutions and Setting the final factor equal to zero gives and so which has solutions and .  This gives us 5 horizontal intercepts in total: .      Find the vertical and horizontal intercepts of   The vertical intercept can be found by evaluating . .  The horizontal intercepts can be found by solving . Thus, we want to find such that . Since this is already factored, we can set each factor equal to zero and solve for in those individual factors. only when thus . Then, when   We can always check our answers are reasonable by graphing the polynomial.      Find the horizontal intercepts of .  Since this polynomial is not in factored form, has no common factors, and does not appear to be factorable using techniques we know, we can turn to technology to find the intercepts.   Graph of    A polynomial that increases, decreases, then increases, with apparent horizontal intercepts at negative 3 comma 0, negative 2 comma 0 and 1 comma 0     Graphing this function, it appears there are horizontal intercepts at .  We could check these are correct by plugging in these values for and verifying that .     Find the vertical and horizontal intercepts of the function .     Graphical Behavior at Intercepts  If we graph the function , notice that the behavior at each of the horizontal intercepts is different.   Graph of    A polynomial that decreases passing through negative 3 comma 0 down to about negative 2.5 comma negative 33 then increasing but flatting off at negative 1 comma 0 on the way up to about 0.9 comma 32, then decreasing to 2 comma 0, then increasing again.     At the horizontal intercept , coming from the factor of the polynomial, the graph passes directly through the horizontal intercept. The factor is linear (has a power of 1 on the term), so the behavior near the intercept is like that of a line - it passes directly through the intercept. We call this a single zero, since the zero corresponds to a single factor of the function.  At the horizontal intercept , coming from the factor of the polynomial, the graph touches the axis at the intercept and changes direction. The factor is quadratic (degree 2), so the behavior near the intercept is like that of a quadratic function – it bounces off the horizontal axis at the intercept. Since , the factor is repeated twice, so we call this a double zero. We could also say the zero has multiplicity 2.  At the horizontal intercept , coming from the factor of the polynomial, the graph passes through the axis at the intercept, but flattens out a bit first. This factor is cubic (degree 3), so the behavior near the intercept is like that of a cubic, with the same “S” type shape near the intercept that the toolkit function has. We call this a triple zero. We could also say the zero has multiplicity 3.  By utilizing these behaviors, we can sketch a reasonable graph of a factored polynomial function without needing technology.   Graphical Behavior of Polynomials at Horizontal Intercepts   If a polynomial contains a factor of the form , the behavior near the horizontal intercept is determined by the power on the factor. If the horizontal intercept will look something like this:   A single zero, also known as a zero with multiplicity one    A graph showing a horizontal axis, and a curve passing directly through the axis     If the horizontal intercept will look something like this:   A double zero, also known as a zero with multiplicity two    A graph showing a horizontal axis, and a curve decreasing down to the axis, touching the axis, then increasing away from the axis.     If the horizontal intercept will look something like this:   A triple zero, also known as a zero with multiplicity three    A graph showing a horizontal axis, and a curve passing through the axis, but flattening as it passes through the axis.     For higher even powers 4,6,8 etc.… the graph will still bounce off the horizontal axis but the graph will appear flatter with each increasing even power as it approaches and leaves the axis.  For higher odd powers, 5,7,9 etc… the graph will still pass through the horizontal axis but the graph will appear flatter with each increasing odd power as it approaches and leaves the axis.      Sketch a graph of .  This graph has two horizontal intercepts. At , the factor is squared, indicating the graph will bounce at this horizontal intercept. At , the factor is not squared, indicating the graph will pass through the axis at this intercept.  Additionally, we can see the leading term, if this polynomial were multiplied out, would be , so the long-run behavior is that of a vertically reflected cubic, with the outputs decreasing as the inputs get large positive, and the inputs increasing as the inputs get large negative.  To sketch this we consider the following: As the function so we know the graph starts in the 2nd quadrant and is decreasing toward the horizontal axis.  At the graph bounces off the horizontal axis and so the function must start increasing.  Since , the point is the vertical intercept of the graph.  Somewhere after this point, the graph must turn back down or start decreasing toward the horizontal axis since the graph passes through the next intercept at .  As the function so we know the graph continues to decrease and we can stop drawing the graph in the 4th quadrant.  Using technology we can verify the shape of the graph:   Graph of f(x)=-2(x+3)^{2} (x-5)    A graph that decreases down to negative 3 comma 0 then increases through 0 comma 90 and continues up to about 2.1 comma 150, then deceases passing through 5 comma 0        Given the function , use the methods that we have learned so far to find the vertical and horizontal intercepts, determine where the function is negative and positive, describe the long run behavior, and sketch the graph without technology.     Solving Polynomial Inequalities  One application of our ability to find intercepts and sketch a graph of polynomials is the ability to solve polynomial inequalities. It is a very common question to ask when a function will be positive or negative. We can solve polynomial inequalities by either utilizing the graph, or by using test values.    Solve .  As with all inequalities, we will start by solving the equality , which has solutions at . We know the function can only change from positive to negative at these values, so these divide the inputs into 4 intervals.  We can now choose a test value in each interval and evaluate the function at each test value to determine if the function is positive or negative in that interval.  For the first interval where we can use the test value . Since , we can conclude that the function is positive for all values less than -3.  For the next interval, , we can use the text value . , so we know that must be negative for all in the interval .  The third interval, , includes the value so we can check and see that . Thus, the function is negative on the interval .  Lastly, we can check the interval where and evaluate our function at to find Thus is positive for all values larger than 4.  On a number line this would look like:     A numberline broken into 4 segments. The segment to the left of -3 is labeled positive. The segment from -3 to -1 is labeled negative. The segment from -1 to 4 is labeled negative. The segment to the right of 4 is labeled positive.     From our test values, we can determine this function is positive when or , or in interval notation, .    We could have also determined on which intervals the function was positive by sketching a graph of the function. We illustrate that technique in the next example    Find the domain of the function .  A square root is only defined when the quantity we are taking the square root of, the quantity inside the square root, is zero or greater. Thus, the domain of this function will be when .  We start by solving the equality . While we could use the quadratic formula, this equation factors nicely to , giving horizontal intercepts and . We also know that since the leading coefficient of the function is -1, the graph must open downward.  Sketching a graph of this quadratic will allow us to determine when it is positive.     A downwards opening U-shaped parabola with horizontal intercepts at negative 6 comma 0 and 1 comma 0     From the graph we can see this function is positive for inputs between the intercepts. So when , and this will be the domain of the function.      Writing Equations using Intercepts  Since a polynomial function written in factored form will have a horizontal intercept where each factor is equal to zero, we can form a function that will pass through a set of horizontal intercepts by introducing a corresponding set of factors.   Writing an Equation for a Polynomial from Intercepts   If we know the horizontal intercepts and the behavior or multiplicity at those intercepts, we can write a polynomial of minimal degree with those intercepts. We can do so by following these steps:   Determine the horizontal intercepts .    Examine the behavior at each intercept to determine the corresponding multiplicity of each intercept, .    Write the polynomial in factored form .    Use another point on the graph to solve for the stretch factor . This will also be the leading coefficient for the polynomial.     Notice the degree of the polynomial will be the sum of the multiplicities .      Write a formula for the polynomial function graphed here.     A polynomial that decreases passing through negative 3 comma 0, then increases passing through 0 comma negative 2 up to 2 comma 0, then decreases to about 4 comma negative 1 then increases passing through 5 comma 0     This graph has three horizontal intercepts: . At and the graph passes through the axis, suggesting the corresponding factors of the polynomial will be linear. At the graph bounces at the intercept, suggesting the corresponding factor of the polynomial will be 2nd degree (quadratic).  Together, this gives us:   To determine the stretch factor, we can utilize another point on the graph. Here, the vertical intercept appears to be , so we can plug in those values to solve for : simplifies to , giving us .  The graphed polynomial appears to represent the function .     Given the graph, write a formula for the function shown.     A polynomial that increases to negative 1 comma 0, decreases to 0 comma negative 4, increases up to 2 comma 0 leveling off at that intercept, the increases further before decreasing passing through 4 comma 0        Estimating Extrema  With quadratics, we were able to algebraically find the maximum or minimum value of the function by finding the vertex. For general polynomials, finding these points is not possible without more advanced techniques from calculus. Even then, finding where extrema occur can still be algebraically challenging. For now, we will estimate the locations of extrema points using technology to generate a graph.    An open-top box is to be constructed by cutting out squares from each corner of a 14 cm by 20 cm sheet of plastic then folding up the sides. Find the size of squares that should be cut out to maximize the volume enclosed by the box.  We will start this problem by drawing a picture, labeling the width of the cut-out squares with a variable, .     A large rectangle with squares in each corner. The sides of the squares are labeled w.     Notice that after a square is cut out from each end, it leaves a cm by cm rectangle for the base of the box, and the box will be cm tall. This gives the volume:   Using technology to sketch a graph allows us to estimate the maximum value for the volume, restricted to reasonable values for : values from 0 to 7 (consider why we only care about values of in this range).     A polynomial that increases passing through 0 comma 0 up to about 2.4 comma 340, then decreases passing through 7 comma 0, then increases passing through 10 comma 0     From this graph, we can estimate the maximum value is around 340, and occurs when the squares are about 2.75 cm wide. To improve this estimate, we could use advanced features of our technology, if available, or simply change our window to zoom in on our graph.   A zoomed-in view of the previous graph.    A zoomed graph with horizontal scale from 2.3 to 3 in steps of 0.1 and vertical scale from 331 to 340. A downwards opening U-shaped graph with maximum around 2.7 comma 339     From this zoomed-in view, we can refine our estimate for the max volume to about 339, when the squares are 2.7 cm wide. In fact, using calculus methods (which we will not cover), we would be able to determine that the maximum volume is 339.01255 cubic centimeters, and this occurs when the squares are 2.70394 cm long, meaning that our estimate was quite accurate.     Use graphing technology to find the maximum and minimum values on the interval of the function .    [Answers to Exercises]   Vertical intercept is . factors as . So, the horizontal intercepts are     Vertical intercept at , Horizontal intercepts are The function is negative on The function is positive on The leading term is , so as and as    Graph of    A graph that increases passing through negative 2 comma 0 up to about negative 1 comma 4, then decreases passing through 0 comma 0 down to about 1.7 comma negative 8 then increases passing through 3 comma 0       Double zero at , triple zero at , single zero at . . Substituting and solving for ,     The minimum occurs at approximately the point , and the maximum occurs at approximately the point .       "
},
{
  "id": "Chapter3Section3-2-3",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-2-3",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Short Run Behavior   Intercepts (Horizontal and Vertical)       Methods to find Horizontal intercepts   Factoring Methods    Factored Forms    Technology       Graphical Behavior at intercepts    Single, Double and Triple zeros (or multiplicity 1, 2, and 3 behaviors)    Solving polynomial inequalities using test values and graphing techniques    Writing equations using intercepts    Estimating extrema      "
},
{
  "id": "Chapter3Section3-3-5",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-3-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Find the horizontal intercepts of .  We can attempt to factor this polynomial to find solutions for . That is, we are finding the values such that . Factoring out the greatest common factor of from the left hand side yields . Factoring the polynomial inside the parenthesis gives us . Then, we set each of these factors equal to zero to find our solutions. Setting we get the solution If then and this has the two solutions and Setting the final factor equal to zero gives and so which has solutions and .  This gives us 5 horizontal intercepts in total: .   "
},
{
  "id": "Chapter3Section3-3-6",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-3-6",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Find the vertical and horizontal intercepts of   The vertical intercept can be found by evaluating . .  The horizontal intercepts can be found by solving . Thus, we want to find such that . Since this is already factored, we can set each factor equal to zero and solve for in those individual factors. only when thus . Then, when   We can always check our answers are reasonable by graphing the polynomial.   "
},
{
  "id": "Chapter3Section3-3-7",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-3-7",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find the horizontal intercepts of .  Since this polynomial is not in factored form, has no common factors, and does not appear to be factorable using techniques we know, we can turn to technology to find the intercepts.   Graph of    A polynomial that increases, decreases, then increases, with apparent horizontal intercepts at negative 3 comma 0, negative 2 comma 0 and 1 comma 0     Graphing this function, it appears there are horizontal intercepts at .  We could check these are correct by plugging in these values for and verifying that .   "
},
{
  "id": "Chapter3Section3-3-8",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-3-8",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": " Find the vertical and horizontal intercepts of the function .  "
},
{
  "id": "c3s3i2",
  "level": "2",
  "url": "Chapter3Section3.html#c3s3i2",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " Graph of    A polynomial that decreases passing through negative 3 comma 0 down to about negative 2.5 comma negative 33 then increasing but flatting off at negative 1 comma 0 on the way up to about 0.9 comma 32, then decreasing to 2 comma 0, then increasing again.    "
},
{
  "id": "Chapter3Section3-4-8",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-4-8",
  "type": "Definition",
  "number": "3.3.8",
  "title": "Graphical Behavior of Polynomials at Horizontal Intercepts.",
  "body": " Graphical Behavior of Polynomials at Horizontal Intercepts   If a polynomial contains a factor of the form , the behavior near the horizontal intercept is determined by the power on the factor. If the horizontal intercept will look something like this:   A single zero, also known as a zero with multiplicity one    A graph showing a horizontal axis, and a curve passing directly through the axis     If the horizontal intercept will look something like this:   A double zero, also known as a zero with multiplicity two    A graph showing a horizontal axis, and a curve decreasing down to the axis, touching the axis, then increasing away from the axis.     If the horizontal intercept will look something like this:   A triple zero, also known as a zero with multiplicity three    A graph showing a horizontal axis, and a curve passing through the axis, but flattening as it passes through the axis.     For higher even powers 4,6,8 etc.… the graph will still bounce off the horizontal axis but the graph will appear flatter with each increasing even power as it approaches and leaves the axis.  For higher odd powers, 5,7,9 etc… the graph will still pass through the horizontal axis but the graph will appear flatter with each increasing odd power as it approaches and leaves the axis.   "
},
{
  "id": "Chapter3Section3-4-9",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-4-9",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Sketch a graph of .  This graph has two horizontal intercepts. At , the factor is squared, indicating the graph will bounce at this horizontal intercept. At , the factor is not squared, indicating the graph will pass through the axis at this intercept.  Additionally, we can see the leading term, if this polynomial were multiplied out, would be , so the long-run behavior is that of a vertically reflected cubic, with the outputs decreasing as the inputs get large positive, and the inputs increasing as the inputs get large negative.  To sketch this we consider the following: As the function so we know the graph starts in the 2nd quadrant and is decreasing toward the horizontal axis.  At the graph bounces off the horizontal axis and so the function must start increasing.  Since , the point is the vertical intercept of the graph.  Somewhere after this point, the graph must turn back down or start decreasing toward the horizontal axis since the graph passes through the next intercept at .  As the function so we know the graph continues to decrease and we can stop drawing the graph in the 4th quadrant.  Using technology we can verify the shape of the graph:   Graph of f(x)=-2(x+3)^{2} (x-5)    A graph that decreases down to negative 3 comma 0 then increases through 0 comma 90 and continues up to about 2.1 comma 150, then deceases passing through 5 comma 0      "
},
{
  "id": "Chapter3Section3-4-10",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-4-10",
  "type": "Checkpoint",
  "number": "3.3.14",
  "title": "",
  "body": " Given the function , use the methods that we have learned so far to find the vertical and horizontal intercepts, determine where the function is negative and positive, describe the long run behavior, and sketch the graph without technology.  "
},
{
  "id": "Chapter3Section3-5-3",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-5-3",
  "type": "Example",
  "number": "3.3.15",
  "title": "",
  "body": "  Solve .  As with all inequalities, we will start by solving the equality , which has solutions at . We know the function can only change from positive to negative at these values, so these divide the inputs into 4 intervals.  We can now choose a test value in each interval and evaluate the function at each test value to determine if the function is positive or negative in that interval.  For the first interval where we can use the test value . Since , we can conclude that the function is positive for all values less than -3.  For the next interval, , we can use the text value . , so we know that must be negative for all in the interval .  The third interval, , includes the value so we can check and see that . Thus, the function is negative on the interval .  Lastly, we can check the interval where and evaluate our function at to find Thus is positive for all values larger than 4.  On a number line this would look like:     A numberline broken into 4 segments. The segment to the left of -3 is labeled positive. The segment from -3 to -1 is labeled negative. The segment from -1 to 4 is labeled negative. The segment to the right of 4 is labeled positive.     From our test values, we can determine this function is positive when or , or in interval notation, .   "
},
{
  "id": "Chapter3Section3-5-5",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-5-5",
  "type": "Example",
  "number": "3.3.17",
  "title": "",
  "body": "  Find the domain of the function .  A square root is only defined when the quantity we are taking the square root of, the quantity inside the square root, is zero or greater. Thus, the domain of this function will be when .  We start by solving the equality . While we could use the quadratic formula, this equation factors nicely to , giving horizontal intercepts and . We also know that since the leading coefficient of the function is -1, the graph must open downward.  Sketching a graph of this quadratic will allow us to determine when it is positive.     A downwards opening U-shaped parabola with horizontal intercepts at negative 6 comma 0 and 1 comma 0     From the graph we can see this function is positive for inputs between the intercepts. So when , and this will be the domain of the function.   "
},
{
  "id": "Chapter3Section3-6-3",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-6-3",
  "type": "Definition",
  "number": "3.3.19",
  "title": "Writing an Equation for a Polynomial from Intercepts.",
  "body": " Writing an Equation for a Polynomial from Intercepts   If we know the horizontal intercepts and the behavior or multiplicity at those intercepts, we can write a polynomial of minimal degree with those intercepts. We can do so by following these steps:   Determine the horizontal intercepts .    Examine the behavior at each intercept to determine the corresponding multiplicity of each intercept, .    Write the polynomial in factored form .    Use another point on the graph to solve for the stretch factor . This will also be the leading coefficient for the polynomial.     Notice the degree of the polynomial will be the sum of the multiplicities .   "
},
{
  "id": "Chapter3Section3-6-4",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-6-4",
  "type": "Example",
  "number": "3.3.20",
  "title": "",
  "body": "  Write a formula for the polynomial function graphed here.     A polynomial that decreases passing through negative 3 comma 0, then increases passing through 0 comma negative 2 up to 2 comma 0, then decreases to about 4 comma negative 1 then increases passing through 5 comma 0     This graph has three horizontal intercepts: . At and the graph passes through the axis, suggesting the corresponding factors of the polynomial will be linear. At the graph bounces at the intercept, suggesting the corresponding factor of the polynomial will be 2nd degree (quadratic).  Together, this gives us:   To determine the stretch factor, we can utilize another point on the graph. Here, the vertical intercept appears to be , so we can plug in those values to solve for : simplifies to , giving us .  The graphed polynomial appears to represent the function .   "
},
{
  "id": "Chapter3Section3-6-5",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-6-5",
  "type": "Checkpoint",
  "number": "3.3.22",
  "title": "",
  "body": " Given the graph, write a formula for the function shown.     A polynomial that increases to negative 1 comma 0, decreases to 0 comma negative 4, increases up to 2 comma 0 leveling off at that intercept, the increases further before decreasing passing through 4 comma 0     "
},
{
  "id": "Chapter3Section3-7-3",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-7-3",
  "type": "Example",
  "number": "3.3.24",
  "title": "",
  "body": "  An open-top box is to be constructed by cutting out squares from each corner of a 14 cm by 20 cm sheet of plastic then folding up the sides. Find the size of squares that should be cut out to maximize the volume enclosed by the box.  We will start this problem by drawing a picture, labeling the width of the cut-out squares with a variable, .     A large rectangle with squares in each corner. The sides of the squares are labeled w.     Notice that after a square is cut out from each end, it leaves a cm by cm rectangle for the base of the box, and the box will be cm tall. This gives the volume:   Using technology to sketch a graph allows us to estimate the maximum value for the volume, restricted to reasonable values for : values from 0 to 7 (consider why we only care about values of in this range).     A polynomial that increases passing through 0 comma 0 up to about 2.4 comma 340, then decreases passing through 7 comma 0, then increases passing through 10 comma 0     From this graph, we can estimate the maximum value is around 340, and occurs when the squares are about 2.75 cm wide. To improve this estimate, we could use advanced features of our technology, if available, or simply change our window to zoom in on our graph.   A zoomed-in view of the previous graph.    A zoomed graph with horizontal scale from 2.3 to 3 in steps of 0.1 and vertical scale from 331 to 340. A downwards opening U-shaped graph with maximum around 2.7 comma 339     From this zoomed-in view, we can refine our estimate for the max volume to about 339, when the squares are 2.7 cm wide. In fact, using calculus methods (which we will not cover), we would be able to determine that the maximum volume is 339.01255 cubic centimeters, and this occurs when the squares are 2.70394 cm long, meaning that our estimate was quite accurate.   "
},
{
  "id": "Chapter3Section3-7-4",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-7-4",
  "type": "Checkpoint",
  "number": "3.3.28",
  "title": "",
  "body": " Use graphing technology to find the maximum and minimum values on the interval of the function .  "
},
{
  "id": "Chapter3Section3-7-5",
  "level": "2",
  "url": "Chapter3Section3.html#Chapter3Section3-7-5",
  "type": "Checkpoint",
  "number": "3.3.29",
  "title": "",
  "body": " [Answers to Exercises]   Vertical intercept is . factors as . So, the horizontal intercepts are     Vertical intercept at , Horizontal intercepts are The function is negative on The function is positive on The leading term is , so as and as    Graph of    A graph that increases passing through negative 2 comma 0 up to about negative 1 comma 4, then decreases passing through 0 comma 0 down to about 1.7 comma negative 8 then increases passing through 3 comma 0       Double zero at , triple zero at , single zero at . . Substituting and solving for ,     The minimum occurs at approximately the point , and the maximum occurs at approximately the point .     "
},
{
  "id": "Chapter3Section4",
  "level": "1",
  "url": "Chapter3Section4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Rational Functions",
  "body": " Rational Functions   Introduction  In the previous sections, we have built polynomials of the form . In this section, we explore ratios of these functions, known as rational functions.   Important Topics of this Section      Inversely proportional; Reciprocal toolkit function    Inversely proportional to the square; Reciprocal squared toolkit function    Horizontal Asymptotes    Vertical Asymptotes    Rational Functions   Finding intercepts, asymptotes, and holes    Given equation sketch the graph    Identifying a function from its graph            You plan to drive 100 miles. Find a formula for the time the trip will take as a function of the speed you drive.  You may recall that multiplying speed by time will give you distance. If we let represent the drive time in hours, and represent the velocity (speed or rate) at which we drive, then . Since our distance is fixed at 100 miles, . Solving this relationship for the time gives us the function we desired: .    While this type of relationship can be written using the negative exponent, it is more common to see it written as a fraction.  This particular example is one of an inversely proportional relationship – where one quantity is a constant divided by the other quantity, like . Notice that this is a transformation of the reciprocal toolkit function, .  Several natural phenomena, such as gravitational force and volume of sound, behave in a manner inversely proportional to the square of another quantity. For example, the volume, , of a sound heard at a distance from the source would be related by for some constant value ( is determined by several factors such as the material in which the sound is traveling).  These functions are transformations of the reciprocal squared toolkit function .  We have seen the graphs of the basic reciprocal function and the squared reciprocal function from our study of toolkit functions. These graphs have several important features.   Graph of    From the left the graph starts out flat just below 0. As x increases, y decreases slowly at first then more rapidly. As x approaches 0 from the left, the graph decreases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.      Graph of    From the left the graph starts out flat just below 0. As x increases, y increases slowly at first then more rapidly. As x approaches 0 from the left, the graph increases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.     Let's begin by looking at the reciprocal function, . As we well know, dividing by zero is never defined, and therefore zero is not in the domain, and so the function is undefined at an input of zero.  However, we can still investigate what happends to the outputs of the function as we let get very close to a value of 0.  As the input values approach zero from the left side (taking on very small, negative values), the function values become very large in the negative direction (in other words, they approach negative infinity). We write: as . The superscript negative sign designates that we approaching 0 from the negative side of the number line, and does not act as an exponent.  As we approach zero from the right side (small, positive input values), the function values become very large in the positive direction (approaching infinity). We write: as .  This behavior creates a vertical asymptote. An asymptote is a line that the graph approaches. In this case the graph is approaching the vertical line as the input becomes close to zero.  We can also investigate what happens to the output values of the function as we let become a very large positive or negative number.  As the value of increase without bound (approaches positive infinity), the function values approach 0. As the value of decreases without bound (approaches negative infinity), the function values approach 0. Symbolically, we could write: as .  Based on this long run behavior and the graph we can see that the function approaches 0, forever getting closer as the inputs become large. This behavior creates a horizontal asymptote. In this case the graph is approaching the horizontal line as the input becomes very large in the negative and positive directions.   Vertical and Horizontal Asymptotes   A vertical asymptote of a graph is a vertical line where the graph tends towards positive or negative infinity as the inputs approach . If is a vertical asymptote for the function , then as .  A horizontal asymptote of a graph is a horizontal line where the function outputs approache the line as the inputs get large. If is a horizontal asymptote for the function , then as .     Use symbolic notation to describe the long run behavior and short run behavior for the reciprocal squared function.     Sketch a graph of the reciprocal function shifted two units to the left and up three units. Identify the horizontal and vertical asymptotes of the graph, if any.  Transforming the graph left 2 and up 3 would result in the function , or equivalently, by giving the terms a common denominator, .  Shifting the toolkit function would give us this graph.   Graph of    From the left the graph starts out flat just below 3. As x increases, y decreases slowly at first then more rapidly. As x approaches negative 2 from the left, the graph decreases rapidly out of the window. Immediately past negative 2, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 3.     Notice that this equation is undefined at , and the graph also is showing a vertical asymptote at . Specifically, as , and as .  As the inputs grow large, the graph appears to be leveling off at output values of 3, indicating a horizontal asymptote at . Thus, as .  Notice that horizontal and vertical asymptotes get shifted left 2 and up 3 along with the function.     Sketch the graph and find the horizontal and vertical asymptotes of the reciprocal squared function that has been shifted right 3 units and down 4 units.   In the previous example, we shifted a toolkit function in a way that resulted in a function of the form . This is an example of a more general rational function.   Rational Function   A rational function is a function that can be written as the ratio of two polynomials, and .       A large mixing tank currently contains 100 gallons of water, into which 5 pounds of sugar have been mixed. A tap will open pouring 10 gallons per minute of water into the tank at the same time sugar is poured into the tank at a rate of 1 pound per minute. Find the concentration (pounds per gallon) of sugar in the tank after minutes.  Notice that the amount of water in the tank is changing linearly, as is the amount of sugar in the tank. We can write an equation independently for each:    The concentration, , will be the ratio of pounds of sugar to gallons of water. Letting , we get the function .      Finding Asymptotes and Intercepts  Given a rational function, as part of investigating the short and long run behavior we are interested in finding any vertical and horizontal asymptotes, as well as finding any vertical or horizontal intercepts, as we have done in the past.  We might notice that, so far, the vertical asymptotes in our examples occur when the denominator has a value of zero: where the function is undefined. With one exception, a vertical asymptote will occur whenever the denominator is zero.    Find the vertical asymptotes of the function .  To find the vertical asymptotes, we determine where this function will be undefined by setting the denominator equal to zero:   This indicates two vertical asymptotes, and , which a look at a graph confirms.   Graph of    A graph that starts out decreasing slowly, then as x approaches negative 2 from the left, the graph decreases rapidly exiting the window. Right of x = negative 2 the graph decreases from above the window, then turns and increases out of the window as x approaches 1 from the left. Right of 1 the graph increases from below the window, then starts to flatten.       The exception to this rule can occur when both the numerator and denominator of a rational function are zero at the same input.    Find the vertical asymptotes of the function .  To find the vertical asymptotes, we determine where this function will be undefined by finding where denominator will be zero. We can do this by factoring: , so the denominator is zero at .  However, the numerator of this function is also equal to zero when . The function will still be undefined at 2, since is still undefined, but if then , which does not have a vertical asymptote at .  The graph of will have a vertical asymptote at , but at the graph will have a hole: a single point where the graph is not defined, indicated by an open circle.   Graph of    As x approaches negative 2 from the left, the graph approaches negative infinity. As x approaches negative 2 from the right, the graph approaches positive infinity. There is an open circle on the graph where x = 2.        Vertical Asymptotes and Holes of Rational Functions   At points where the denominator of a rational function equals zero and the numerator is not zero, the rational function has a vertical asymptote.  At points where both the numerator and denominator of a rational function equal zero, factor the numerator and denominator and simplify: either the simplified function will have a vertical asymptote (and the original function will as well) or the graph of the original function will have a hole.    To find horizontal asymptotes, we are interested in the behavior of the function as the input grows large, so we consider long run behavior of the numerator and denominator separately. Recall that a polynomial’s long run behavior will mirror that of the leading term. Likewise, a rational function’s long run behavior will mirror that of the ratio of the leading terms of the numerator and denominator functions.  There are three distinct outcomes when this analysis is done:  Case 1: The degree of the denominator > degree of the numerator Example: . In this case, the long run behavior is . This tells us that as the inputs grow large, this function will behave similarly to the function . As the inputs grow large, the outputs of will approach zero, resulting in a horizontal asymptote at . Thus, as .  Case 2: The degree of the denominator < degree of the numerator Example: . In this case, the long run behavior is . This tells us that as the inputs grow large, this function will behave similarly to the function . As the inputs grow large, the outputs will grow and not approach any constant value, so this graph has no horizontal asymptote. Thus, as , and as .  Case 3: The degree of the denominator = degree of the numerator Example: . In this case, the long run behavior is . This tells us that as the inputs grow large, this function will behave like the function , which is a horizontal line. Thus, as , resulting in a horizontal asymptote at .   Horizontal Asymptote of Rational Functions   The horizontal asymptote of a rational function can be determined by looking at the degrees of the numerator and denominator. Given a rational function of the form    If : has a horizontal asymptote at     If : has no horizontal asymptote    If : has a horizontal asymptote at ratio of leading coefficients, .         In the sugar concentration problem from earlier, we created the equation . Find the horizontal asymptote and interpret it in context of the scenario.  Both the numerator and denominator are linear (degree 1), so since the degrees are equal, there will be a horizontal asymptote at the ratio of the leading coefficients. In the numerator, the leading term is , with coefficient 1. In the denominator, the leading term is , with coefficient 10. The horizontal asymptote will be at the ratio of these values: so as . This function will have a horizontal asymptote at . This tells us that as the input gets large, the output values will approach , and in context, this means that as more time goes by, the concentration of sugar in the tank will approach one tenth of a pound of sugar per gallon of water or pounds per gallon.      Find the horizontal and vertical asymptotes of the function .  First, note this function has no inputs that make both the numerator and denominator zero, so there are no potential holes. The function will have vertical asymptotes when the denominator is zero, causing the function to be undefined. The denominator will be zero at , indicating vertical asymptotes at these values.  The numerator has degree 2, while the denominator has degree 3. Since the degree of the denominator is greater than that of the numerator, the denominator will grow faster than the numerator, causing the outputs to tend towards zero as the inputs get large, and so as . This function will have a horizontal asymptote at .     Find the vertical and horizontal asymptotes of the function .     Intercepts  As with all functions, a rational function will have a vertical intercept when the input is zero, if the function is defined at zero. It is possible for a rational function to not have a vertical intercept if the function is undefined at zero, which will happen if is a factor of the denominator (such as ).  Likewise, a rational function will have horizontal intercepts at the inputs that cause the output to be zero (unless that input corresponds to a hole). It is possible there are no horizontal intercepts either. Since a fraction is only equal to zero when the numerator is zero, horizontal intercepts will occur when the numerator of the rational function is equal to zero.    Find the horizontal and vertical intercepts of .  We can find the vertical intercept by evaluating the function at zero: . So, the vertical intercept of is the point .  The horizontal intercepts will occur when the function is equal to zero: . This will only be true when the numerator is zero: , when Thus, the horizontal of occur at and .     Given the reciprocal squared function that is shifted right 3 units and down 4 units, write this as a rational function and find the horizontal and vertical intercepts and the horizontal and vertical asymptotes.     Graphical Behavior at Horizontal Intercepts and Vertical Asymptotes  As with polynomials, factors of the numerator may have integer powers greater than one. However, the effect on the shape of the graph at those intercepts is the same as we saw with polynomials: if the factor giving the intercept has an odd power, the graph passes through the axis; if the factor has an even power, the graph will bounce off the axis at that intercept. The behavior at vertical asymptotes also depends on the power on the factor in the denominator.   Graphical Behavior of Rational Functions at Vertical Asymptotes   If a rational function contains a factor of the form in the denominator (after canceling with possible factors of in the numerator), the behavior near the asymptote is determined by the power on the factor.  If is odd, then on one side of the asymptote the graph will head towards positive infinity and on the other side of the asymptote the graph will head towards negative infinity.  If is even, the graph either heads toward positive infinity on both sides of the vertical asymptote, or heads toward negative infinity on both sides.    For example, the graph of is shown here:     The graph starts out increasing, and as x approaches negative 3 from either side, the graph approaches positive infinity. To the right of x=negative 3 the graph decreases down, touches the x-axis at negative 1, then increases again. As x approaches 2 from the left the graph approaches infinity. As x approaches 2 from the right the graph approaches negative infinity. To the right of x=2 the graph increases, passing through the x-axis at x=3.     At the horizontal intercept corresponding to the factor of the numerator, the graph bounces at the intercept, consistent with the quadratic nature of the factor.  At the horizontal intercept corresponding to the factor of the numerator, the graph passes through the axis as we’d expect from a linear factor. At the vertical asymptote corresponding to the factor of the denominator, the graph heads towards positive infinity on both sides of the asymptote, consistent with the behavior of the toolkit function. At the vertical asymptote corresponding to the factor of the denominator, the graph heads towards positive infinity on the left side of the asymptote and towards negative infinity on the right side, consistent with the behavior of the toolkit function.    Sketch a graph of .  We can start our sketch by finding intercepts and asymptotes. Evaluating the function at zero gives the vertical intercept: .  Looking at when the numerator of the function is zero, we can determine the graph will have horizontal intercepts at and . At each, the behavior will be linear, with the graph passing through the intercept.  Looking at when the denominator of the function is zero, we can determine the graph will have vertical asymptotes at and .  Finally, the degree of denominator is larger than the degree of the numerator, telling us this graph has a horizontal asymptote at . To sketch the graph, we might start by plotting the three intercepts. Since the graph has no horizontal intercepts between the vertical asymptotes, and the vertical intercept is positive, we know the function must remain positive between the asymptotes, letting us fill in the middle portion of the graph. So far we have the following graph as our sketch.   Partial sketch of    An incomplete graph, showing dots on the x-axis at negative 2 and 3, and a U shaped portion of graph between x = negative 1 and x=2, touching the y-axis at y=3     Since the factor associated with the vertical asymptote at was squared, we know the graph will have the same behavior on both sides of the asymptote. Since the graph heads towards positive infinity as the inputs approach the asymptote on the right, the graph will head towards positive infinity on the left as well. For the vertical asymptote at , the factor was not squared, so the graph will have opposite behavior on either side of the asymptote.  After passing through the horizontal intercepts, the graph will then level off towards an output of zero, as indicated by the horizontal asymptote. This gives us the following graph for :   Complete graph of    A graph that starts out flat below y=0, then increases, passing through the x-axis at x=negative 2, then approaching infinity as x approaches negative 1. To the right of negative 1 the graph decreases from outside the window, crossing the y-axis at y=3, and decreasing a bit more before increasing, approaching infinity as x approaches 2. To the right of 2, the graph increases from outside the window, crosses the x-axis at x=3, then levels off staying near 0.        Given the function , use the characteristics of polynomials and rational functions to describe its behavior and sketch the function.   Since a rational function written in factored form will have a horizontal intercept where each factor of the numerator is equal to zero, we can form a numerator that will pass through a set of horizontal intercepts by introducing a corresponding set of factors. Likewise, since the function will have a vertical asymptote where each factor of the denominator is equal to zero, we can form a denominator that will produce the vertical asymptotes by introducing a corresponding set of factors.   Writing Rational Functions from Intercepts and Asymptotes   If a rational function has horizontal intercepts at , and vertical asymptotes at then the function can be written in the form: where the powers or on each factor can be determined by the behavior of the graph at the corresponding intercept or asymptote, and the stretch factor can be determined given a value of the function other than at a horizontal intercept, or by the horizontal asymptote if it is nonzero.      Write a possible equation for the rational function graphed here.     A graph that starts out flat below the y-axis, then increases, passing through the x-axis at negative 2, then approaches infinity as x approaches a vertical asymptote at x=negative 1. To the right of the asymptote, the graph increases from negative infinity, passes the y-axis at y= negative 2, then decreases towards infinity as x approaches another vertical asymptote at x=2. To the right of this asymptote the graph increases from negative infinity, passes through the x-axis at x=3, increases slightly before decreasing slowly towards the x-axis.     The graph appears to have horizontal intercepts at and . At both, the graph passes through the intercept, suggesting linear factors.  The graph has two vertical asymptotes. The one at seems to exhibit the basic behavior similar to , with the graph heading toward positive infinity on one side and heading toward negative infinity on the other. The vertical asymptote at is exhibiting a behavior similar to , with the graph heading toward negative infinity on both sides of the asymptote.  Utilizing this information indicates a function of the form: .  To find the stretch factor, we can use another clear point on the graph, such as the vertical intercept : , so Thus, .  This gives us a final function of .     [Exercise Answers]   Long run behavior, as . Short run behavior, as (there are no horizontal or vertical intercepts).    The function and the asymptotes are shifted 3 units right and 4 units down. As and as .    Vertical asymptotes at and ; horizontal asymptote at .     A graph that starts out flat, just above the horizontal asymptote at y=2, then increases curving upwards, approaching infinity as x approaches the vertical asymptote at 3. To the right of 3 the graph decreases from infinity, then starts to flatten out towards the horizontal asymptote at y=2.       For the transformed reciprocal squared function, we find the rational form. . Since the numerator is the same degree as the denominator we know that as . So is the horizontal asymptote. Next, we set the denominator equal to zero to find the vertical asymptote at , so as . We set the numerator equal to 0 and find the horizontal intercepts are at and , then we evaluate and the vertical intercept is at .    Horizontal asymptote at . Vertical asymptotes are at , and . Vertical intercept at , Horizontal intercepts and . is a double zero and the graph bounces off the axis at this point. is a single zero and crosses the axis at this point.   Graph of    The graph starts out just below the horizontal asymptote at y=one half, then decreases, touching the x-axis at negative 2 then increases up, passing through the y-axis at 1 and approaching infinity as x approaches 1. To the right of 1 the graph decreases from infinity, passing through x=2, and decreasing towards negative infinity as x approaches 3. To the right of the 3 the graph decreases from positive infinity then starts to level off towards the horizontal asymptote at y = one half.          "
},
{
  "id": "Chapter3Section4-2-3",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Important Topics of this Section.",
  "body": " Important Topics of this Section      Inversely proportional; Reciprocal toolkit function    Inversely proportional to the square; Reciprocal squared toolkit function    Horizontal Asymptotes    Vertical Asymptotes    Rational Functions   Finding intercepts, asymptotes, and holes    Given equation sketch the graph    Identifying a function from its graph         "
},
{
  "id": "Chapter3Section4-2-4",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-4",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  You plan to drive 100 miles. Find a formula for the time the trip will take as a function of the speed you drive.  You may recall that multiplying speed by time will give you distance. If we let represent the drive time in hours, and represent the velocity (speed or rate) at which we drive, then . Since our distance is fixed at 100 miles, . Solving this relationship for the time gives us the function we desired: .   "
},
{
  "id": "c3s4i1",
  "level": "2",
  "url": "Chapter3Section4.html#c3s4i1",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " Graph of    From the left the graph starts out flat just below 0. As x increases, y decreases slowly at first then more rapidly. As x approaches 0 from the left, the graph decreases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.    "
},
{
  "id": "c3s4i2",
  "level": "2",
  "url": "Chapter3Section4.html#c3s4i2",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " Graph of    From the left the graph starts out flat just below 0. As x increases, y increases slowly at first then more rapidly. As x approaches 0 from the left, the graph increases rapidly out of the window. Immediately past 0, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 0.    "
},
{
  "id": "Chapter3Section4-2-20",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-20",
  "type": "Definition",
  "number": "3.4.5",
  "title": "Vertical and Horizontal Asymptotes.",
  "body": " Vertical and Horizontal Asymptotes   A vertical asymptote of a graph is a vertical line where the graph tends towards positive or negative infinity as the inputs approach . If is a vertical asymptote for the function , then as .  A horizontal asymptote of a graph is a horizontal line where the function outputs approache the line as the inputs get large. If is a horizontal asymptote for the function , then as .   "
},
{
  "id": "Chapter3Section4-2-21",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-21",
  "type": "Checkpoint",
  "number": "3.4.6",
  "title": "",
  "body": " Use symbolic notation to describe the long run behavior and short run behavior for the reciprocal squared function.  "
},
{
  "id": "Chapter3Section4-2-22",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-22",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Sketch a graph of the reciprocal function shifted two units to the left and up three units. Identify the horizontal and vertical asymptotes of the graph, if any.  Transforming the graph left 2 and up 3 would result in the function , or equivalently, by giving the terms a common denominator, .  Shifting the toolkit function would give us this graph.   Graph of    From the left the graph starts out flat just below 3. As x increases, y decreases slowly at first then more rapidly. As x approaches negative 2 from the left, the graph decreases rapidly out of the window. Immediately past negative 2, the graph decreases rapidly from above the window, decreasing quickly and first then more slowly. As x increases to the right, the graph flattens, approaching 3.     Notice that this equation is undefined at , and the graph also is showing a vertical asymptote at . Specifically, as , and as .  As the inputs grow large, the graph appears to be leveling off at output values of 3, indicating a horizontal asymptote at . Thus, as .  Notice that horizontal and vertical asymptotes get shifted left 2 and up 3 along with the function.   "
},
{
  "id": "Chapter3Section4-2-23",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-23",
  "type": "Checkpoint",
  "number": "3.4.9",
  "title": "",
  "body": " Sketch the graph and find the horizontal and vertical asymptotes of the reciprocal squared function that has been shifted right 3 units and down 4 units.  "
},
{
  "id": "Chapter3Section4-2-25",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-25",
  "type": "Definition",
  "number": "3.4.10",
  "title": "Rational Function.",
  "body": " Rational Function   A rational function is a function that can be written as the ratio of two polynomials, and .    "
},
{
  "id": "Chapter3Section4-2-26",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-2-26",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  A large mixing tank currently contains 100 gallons of water, into which 5 pounds of sugar have been mixed. A tap will open pouring 10 gallons per minute of water into the tank at the same time sugar is poured into the tank at a rate of 1 pound per minute. Find the concentration (pounds per gallon) of sugar in the tank after minutes.  Notice that the amount of water in the tank is changing linearly, as is the amount of sugar in the tank. We can write an equation independently for each:    The concentration, , will be the ratio of pounds of sugar to gallons of water. Letting , we get the function .   "
},
{
  "id": "Chapter3Section4-3-4",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-4",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "  Find the vertical asymptotes of the function .  To find the vertical asymptotes, we determine where this function will be undefined by setting the denominator equal to zero:   This indicates two vertical asymptotes, and , which a look at a graph confirms.   Graph of    A graph that starts out decreasing slowly, then as x approaches negative 2 from the left, the graph decreases rapidly exiting the window. Right of x = negative 2 the graph decreases from above the window, then turns and increases out of the window as x approaches 1 from the left. Right of 1 the graph increases from below the window, then starts to flatten.      "
},
{
  "id": "Chapter3Section4-3-6",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-6",
  "type": "Example",
  "number": "3.4.14",
  "title": "",
  "body": "  Find the vertical asymptotes of the function .  To find the vertical asymptotes, we determine where this function will be undefined by finding where denominator will be zero. We can do this by factoring: , so the denominator is zero at .  However, the numerator of this function is also equal to zero when . The function will still be undefined at 2, since is still undefined, but if then , which does not have a vertical asymptote at .  The graph of will have a vertical asymptote at , but at the graph will have a hole: a single point where the graph is not defined, indicated by an open circle.   Graph of    As x approaches negative 2 from the left, the graph approaches negative infinity. As x approaches negative 2 from the right, the graph approaches positive infinity. There is an open circle on the graph where x = 2.      "
},
{
  "id": "Chapter3Section4-3-7",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-7",
  "type": "Definition",
  "number": "3.4.16",
  "title": "Vertical Asymptotes and Holes of Rational Functions.",
  "body": " Vertical Asymptotes and Holes of Rational Functions   At points where the denominator of a rational function equals zero and the numerator is not zero, the rational function has a vertical asymptote.  At points where both the numerator and denominator of a rational function equal zero, factor the numerator and denominator and simplify: either the simplified function will have a vertical asymptote (and the original function will as well) or the graph of the original function will have a hole.   "
},
{
  "id": "Chapter3Section4-3-13",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-13",
  "type": "Definition",
  "number": "3.4.17",
  "title": "Horizontal Asymptote of Rational Functions.",
  "body": " Horizontal Asymptote of Rational Functions   The horizontal asymptote of a rational function can be determined by looking at the degrees of the numerator and denominator. Given a rational function of the form    If : has a horizontal asymptote at     If : has no horizontal asymptote    If : has a horizontal asymptote at ratio of leading coefficients, .      "
},
{
  "id": "Chapter3Section4-3-14",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-14",
  "type": "Example",
  "number": "3.4.18",
  "title": "",
  "body": "  In the sugar concentration problem from earlier, we created the equation . Find the horizontal asymptote and interpret it in context of the scenario.  Both the numerator and denominator are linear (degree 1), so since the degrees are equal, there will be a horizontal asymptote at the ratio of the leading coefficients. In the numerator, the leading term is , with coefficient 1. In the denominator, the leading term is , with coefficient 10. The horizontal asymptote will be at the ratio of these values: so as . This function will have a horizontal asymptote at . This tells us that as the input gets large, the output values will approach , and in context, this means that as more time goes by, the concentration of sugar in the tank will approach one tenth of a pound of sugar per gallon of water or pounds per gallon.   "
},
{
  "id": "Chapter3Section4-3-15",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-15",
  "type": "Example",
  "number": "3.4.19",
  "title": "",
  "body": "  Find the horizontal and vertical asymptotes of the function .  First, note this function has no inputs that make both the numerator and denominator zero, so there are no potential holes. The function will have vertical asymptotes when the denominator is zero, causing the function to be undefined. The denominator will be zero at , indicating vertical asymptotes at these values.  The numerator has degree 2, while the denominator has degree 3. Since the degree of the denominator is greater than that of the numerator, the denominator will grow faster than the numerator, causing the outputs to tend towards zero as the inputs get large, and so as . This function will have a horizontal asymptote at .   "
},
{
  "id": "Chapter3Section4-3-16",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-3-16",
  "type": "Checkpoint",
  "number": "3.4.20",
  "title": "",
  "body": " Find the vertical and horizontal asymptotes of the function .  "
},
{
  "id": "Chapter3Section4-4-4",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-4-4",
  "type": "Example",
  "number": "3.4.21",
  "title": "",
  "body": "  Find the horizontal and vertical intercepts of .  We can find the vertical intercept by evaluating the function at zero: . So, the vertical intercept of is the point .  The horizontal intercepts will occur when the function is equal to zero: . This will only be true when the numerator is zero: , when Thus, the horizontal of occur at and .   "
},
{
  "id": "Chapter3Section4-4-5",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-4-5",
  "type": "Checkpoint",
  "number": "3.4.22",
  "title": "",
  "body": " Given the reciprocal squared function that is shifted right 3 units and down 4 units, write this as a rational function and find the horizontal and vertical intercepts and the horizontal and vertical asymptotes.  "
},
{
  "id": "Chapter3Section4-5-3",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-3",
  "type": "Definition",
  "number": "3.4.23",
  "title": "Graphical Behavior of Rational Functions at Vertical Asymptotes.",
  "body": " Graphical Behavior of Rational Functions at Vertical Asymptotes   If a rational function contains a factor of the form in the denominator (after canceling with possible factors of in the numerator), the behavior near the asymptote is determined by the power on the factor.  If is odd, then on one side of the asymptote the graph will head towards positive infinity and on the other side of the asymptote the graph will head towards negative infinity.  If is even, the graph either heads toward positive infinity on both sides of the vertical asymptote, or heads toward negative infinity on both sides.   "
},
{
  "id": "c3s4i6",
  "level": "2",
  "url": "Chapter3Section4.html#c3s4i6",
  "type": "Figure",
  "number": "3.4.24",
  "title": "",
  "body": "   The graph starts out increasing, and as x approaches negative 3 from either side, the graph approaches positive infinity. To the right of x=negative 3 the graph decreases down, touches the x-axis at negative 1, then increases again. As x approaches 2 from the left the graph approaches infinity. As x approaches 2 from the right the graph approaches negative infinity. To the right of x=2 the graph increases, passing through the x-axis at x=3.    "
},
{
  "id": "Chapter3Section4-5-8",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-8",
  "type": "Example",
  "number": "3.4.25",
  "title": "",
  "body": "  Sketch a graph of .  We can start our sketch by finding intercepts and asymptotes. Evaluating the function at zero gives the vertical intercept: .  Looking at when the numerator of the function is zero, we can determine the graph will have horizontal intercepts at and . At each, the behavior will be linear, with the graph passing through the intercept.  Looking at when the denominator of the function is zero, we can determine the graph will have vertical asymptotes at and .  Finally, the degree of denominator is larger than the degree of the numerator, telling us this graph has a horizontal asymptote at . To sketch the graph, we might start by plotting the three intercepts. Since the graph has no horizontal intercepts between the vertical asymptotes, and the vertical intercept is positive, we know the function must remain positive between the asymptotes, letting us fill in the middle portion of the graph. So far we have the following graph as our sketch.   Partial sketch of    An incomplete graph, showing dots on the x-axis at negative 2 and 3, and a U shaped portion of graph between x = negative 1 and x=2, touching the y-axis at y=3     Since the factor associated with the vertical asymptote at was squared, we know the graph will have the same behavior on both sides of the asymptote. Since the graph heads towards positive infinity as the inputs approach the asymptote on the right, the graph will head towards positive infinity on the left as well. For the vertical asymptote at , the factor was not squared, so the graph will have opposite behavior on either side of the asymptote.  After passing through the horizontal intercepts, the graph will then level off towards an output of zero, as indicated by the horizontal asymptote. This gives us the following graph for :   Complete graph of    A graph that starts out flat below y=0, then increases, passing through the x-axis at x=negative 2, then approaching infinity as x approaches negative 1. To the right of negative 1 the graph decreases from outside the window, crossing the y-axis at y=3, and decreasing a bit more before increasing, approaching infinity as x approaches 2. To the right of 2, the graph increases from outside the window, crosses the x-axis at x=3, then levels off staying near 0.      "
},
{
  "id": "Chapter3Section4-5-9",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-9",
  "type": "Checkpoint",
  "number": "3.4.28",
  "title": "",
  "body": " Given the function , use the characteristics of polynomials and rational functions to describe its behavior and sketch the function.  "
},
{
  "id": "Chapter3Section4-5-11",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-11",
  "type": "Definition",
  "number": "3.4.29",
  "title": "Writing Rational Functions from Intercepts and Asymptotes.",
  "body": " Writing Rational Functions from Intercepts and Asymptotes   If a rational function has horizontal intercepts at , and vertical asymptotes at then the function can be written in the form: where the powers or on each factor can be determined by the behavior of the graph at the corresponding intercept or asymptote, and the stretch factor can be determined given a value of the function other than at a horizontal intercept, or by the horizontal asymptote if it is nonzero.   "
},
{
  "id": "Chapter3Section4-5-12",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-12",
  "type": "Example",
  "number": "3.4.30",
  "title": "",
  "body": "  Write a possible equation for the rational function graphed here.     A graph that starts out flat below the y-axis, then increases, passing through the x-axis at negative 2, then approaches infinity as x approaches a vertical asymptote at x=negative 1. To the right of the asymptote, the graph increases from negative infinity, passes the y-axis at y= negative 2, then decreases towards infinity as x approaches another vertical asymptote at x=2. To the right of this asymptote the graph increases from negative infinity, passes through the x-axis at x=3, increases slightly before decreasing slowly towards the x-axis.     The graph appears to have horizontal intercepts at and . At both, the graph passes through the intercept, suggesting linear factors.  The graph has two vertical asymptotes. The one at seems to exhibit the basic behavior similar to , with the graph heading toward positive infinity on one side and heading toward negative infinity on the other. The vertical asymptote at is exhibiting a behavior similar to , with the graph heading toward negative infinity on both sides of the asymptote.  Utilizing this information indicates a function of the form: .  To find the stretch factor, we can use another clear point on the graph, such as the vertical intercept : , so Thus, .  This gives us a final function of .   "
},
{
  "id": "Chapter3Section4-5-13",
  "level": "2",
  "url": "Chapter3Section4.html#Chapter3Section4-5-13",
  "type": "Checkpoint",
  "number": "3.4.32",
  "title": "",
  "body": " [Exercise Answers]   Long run behavior, as . Short run behavior, as (there are no horizontal or vertical intercepts).    The function and the asymptotes are shifted 3 units right and 4 units down. As and as .    Vertical asymptotes at and ; horizontal asymptote at .     A graph that starts out flat, just above the horizontal asymptote at y=2, then increases curving upwards, approaching infinity as x approaches the vertical asymptote at 3. To the right of 3 the graph decreases from infinity, then starts to flatten out towards the horizontal asymptote at y=2.       For the transformed reciprocal squared function, we find the rational form. . Since the numerator is the same degree as the denominator we know that as . So is the horizontal asymptote. Next, we set the denominator equal to zero to find the vertical asymptote at , so as . We set the numerator equal to 0 and find the horizontal intercepts are at and , then we evaluate and the vertical intercept is at .    Horizontal asymptote at . Vertical asymptotes are at , and . Vertical intercept at , Horizontal intercepts and . is a double zero and the graph bounces off the axis at this point. is a single zero and crosses the axis at this point.   Graph of    The graph starts out just below the horizontal asymptote at y=one half, then decreases, touching the x-axis at negative 2 then increases up, passing through the y-axis at 1 and approaching infinity as x approaches 1. To the right of 1 the graph decreases from infinity, passing through x=2, and decreasing towards negative infinity as x approaches 3. To the right of the 3 the graph decreases from positive infinity then starts to level off towards the horizontal asymptote at y = one half.        "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
