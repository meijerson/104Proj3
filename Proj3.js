/**
 *   @author Bloswick, Mackenzie (bloswickm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 || created: 10.17.2016
 *   @todo
 */
"use strict";
const PROMPT = require('readline-sync');

let userRating, averageRating, amtUsers, totalStars;
let continueProgram;

function main() {
    setContinueProgram();
    while (continueProgram === 1) {
        setTotalStars();
        setAmtUsers();
        setUserRating();
    }
    setAverageRating();
    printAverageRating();
    printGoodbye();
}

main();

function setContinueProgram() {
    if (continueProgram != null) {
        continueProgram = -1;
        while (continueProgram !== 0 && continueProgram !== 1) {
            continueProgram = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueProgram = 1;
    }
}

function setTotalStars() {
    if (totalStars == null) {
        totalStars = 0;
    }
}

function setAmtUsers() {
    if (amtUsers == null) {
        amtUsers = 0;
    }
}

function setUserRating() {
    userRating = PROMPT.questionInt(`\n\tOn a scale of 0 to 5 stars, how would you rate the movie "The Princess Bride"?: `);
    if (userRating < 0 || userRating > 5) {
        for (let i = 3; i > -1; i--) {
            if (i == 0) {
                console.log(`\n\tYou have not successfully submitted a rating. Have a nice day. `);
                return main();
            }
            userRating = PROMPT.questionInt(`\n\tI'm sorry, ${userRating} is not a correct value. You have ${i} tries left. Please try again: `);
            if (userRating > -1 && userRating < 6) {
                break;
            }
        }
    }
    totalStars = totalStars + userRating;
    amtUsers++;
    console.log(`\n\tThank you for rating "The Princess Bride". We appreciate your participation.`);
    return main();
}

function setAverageRating() {
    averageRating = totalStars / amtUsers;
    console.log(`\n\tThe total Stars for The Princess Bride is currently ${totalStars}. ${amtUsers} users have rated it. `)
}

function printAverageRating() {
    console.log(`\n\tThe average rating for the movie "The Princess Bride" is ${averageRating}. `);
}

function printGoodbye() {
    console.log(`\n\tThank you, and Goodbye.`);
}