// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../getRandomThrow.js';

const test = QUnit.test;

test('check draw', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeDraw = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeDraw, expected);
});

test('check win', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeWin = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeWin, expected);
});

test('check lose', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBelose = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBelose, expected);
});
