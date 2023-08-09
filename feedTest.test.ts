/* Starting on line 27 is where you will begin your code. 
In this exercise you will be adding loops that contain the premade arrays
EX./answer  test("Alex likes the food we expect", () => {
    lionFood.forEach((food) => {
      expect(alex.feed(food)).toBe(`Alex the Lion likes ${food}!`)
    })
You will find the animal class that we have created in the animal.ts
You will find the array of animals using that class in zoo.ts 
You do not need to edit those you are only editing the test here, but they are nice to look at. 
All other instructions are found in the read me file. Good luck and most importantly have fun! 
*/
import { Animal } from "./animal";
import { getAnimal } from "./zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");

const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];

const badFood = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  test("Alex likes the food we expect", () => {
    lionFood.forEach((food) => {
      expect(alex.feed(food)).toBe(
        `${alex.name} the ${alex.type} likes ${food}!`
      );
    });
    badFood.forEach((food) => {
      expect(alex.feed(food)).toBe(
        `${alex.name} the ${alex.type} does not like ${food}!`
      );
    });
  });
  test("Marty likes the food we expect", () => {
    zebraFood.forEach((food) => {
      expect(marty.feed(food)).toBe(
        `${marty.name} the ${marty.type} likes ${food}!`
      );
    });
    badFood.forEach((food) => {
      expect(marty.feed(food)).toBe(
        `${marty.name} the ${marty.type} does not like ${food}!`
      );
    });
  });
  test("Melman likes the food we expect", () => {
    giraffeFood.forEach((food) => {
      expect(melman.feed(food)).toBe(
        `${melman.name} the ${melman.type} likes ${food}!`
      );
    });
    badFood.forEach((food) => {
      expect(melman.feed(food)).toBe(
        `${melman.name} the ${melman.type} does not like ${food}!`
      );
    });
  });
  test("Gloria likes the food we expect", () => {
    hippoFood.forEach((food) => {
      expect(gloria.feed(food)).toBe(
        `${gloria.name} the ${gloria.type} likes ${food}!`
      );
    });
    badFood.forEach((food) => {
      expect(gloria.feed(food)).toBe(
        `${gloria.name} the ${gloria.type} does not like ${food}!`
      );
    });
  });
});

describe("feeding animals, but with less code", () => {
  const animals = [alex, marty, melman, gloria];
  const foods = [lionFood, zebraFood, giraffeFood, hippoFood];
  animals.forEach((animal, i) => {
    const speciesFood = foods[i];
    test(`${animal.name} likes the food we expect`, () => {
      speciesFood.forEach((food) => {
        expect(animal.feed(food)).toBe(
          `${animal.name} the ${animal.type} likes ${food}!`
        );
      });
      badFood.forEach((food) => {
        expect(animal.feed(food)).toBe(
          `${animal.name} the ${animal.type} does not like ${food}!`
        );
      });
    });
  });
});
