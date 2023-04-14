// import EarthYears from '../src/js/Passed.js';

describe('EarthYears', () => {
  let yearspassed
  
  beforeEach(() => {
    yearspassed = new EarthYears(0.3023255814);
  });
  
  test('should have 1 human year equal to 0.3023255814 Earth year.', () => {
    expect(yearspassed).toEqual(0.3023255814);
  });
  test('should correctly convert 1 human year to Earth years', () => {
    expect(yearspassed.EarthYears).toEqual(0.3023255814); 
  });
});
// 


//-------Galactic year multipliers-------
//EARTH------------------------------------
// 13 Earth years /43 human years = 0.3023255814 Earth years per human year

//MERCURY--------------------------------
// 43 human years / 54.16 Mercury years =
// 0.79394387 huamn years per Mercury Year
//
// 54.16 Mercury Years / 43 human years = 1.2595348837 Mercury year per human year


//VENUS---------------------------------
// 43 human years / 20.96 Venus years = 2.0515267176 human years per Venus year.
//
// 20.96 Venus years / 43 human years = 0.4874418605 Venus year per human year

//MARS-------------------------------------
// 43 human years / 6.91 Mars years = 6.2228654124 human years per Mars year.
//
//6.91 Mars years/43 human years = 0.1606976744 Mars year per human year

//Jupitar------------------------------------
// 43 human years / 1.09 Jupiter years = 39.4495412844 human years per Jupitar year.
//1.09 Jupitar years/ 43 human years = 0.0253488372 Jupitar year per human year




// -------------------- Template Example-----

// import Rectangle from '../src/js/rectangle.js';

// describe('Rectangle', () => {
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });

//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });
