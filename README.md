# Get-Learner-Data

# SBA 308: JavaScript Fundamentals

My official code:

- `script.js`: my main solution meeting requirements

My initial/
test attempt/s:

- `attempt1.js`: attempt meeting some requirement

## Official Description

The Get Learner Data processor is a JavaScript module designed to analyze and process learner submissions within a specified course and assignment group. It calculates the average scores of learners, considering submission dates and due dates. The main goal is to provide insights into learner performance over time.

- Returns learner data within objects in an array
  - Returns learner id
  - Returns learner's weighted average
  - Returns learner's assignment averages
    - Deducts 10% of the total points possible for late assigments
  - Removes assignments that are not yet due

### Output:

```javascript
[
  { 1: 0.94, 2: 1, id: 125, avg: 0.985 },
  { 1: 0.78, 2: 0.8400000000000001, id: 132, avg: 0.825 },
];
```

## Features

- **Course Information**: Provides essential information about the course, such as ID and name.
- **Assignment Group Details**: Describes the assignment group, including its ID, name, associated course ID, group weight, and a list of assignments.
- **Learner Submissions**: Contains an array of learner submissions, including learner ID, assignment ID, submission details (submission date and score), and relevant data for processing.
- **Data Processing Function**: `getLearnerData` function takes course information, assignment group details, and learner submissions as input and outputs an array of learner data, including learner ID, average score, and scores for individual assignments.

## How to Use

1. Include the `getLearnerData` function in your project.
2. Provide the necessary course information, assignment group details, and learner submissions as arguments to the function.
3. Execute the function to obtain an array of learner data.
4. Review the results, which include learner ID, average score, and scores for individual assignments.

## Example

```javascript
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
```

## Error Handling

The module is equipped with basic error handling mechanisms to guarantee accurate data input. If an error occurs during processing, the module logs relevant error messages to the console for debugging purposes.

- **If (CourseInfo.id !== AssignmentGroup.course_id), the module will return:**

```javascript
Error: Invalid course ID. Expected 451, but your assignment group is in 452.
```
