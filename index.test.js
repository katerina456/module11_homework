const getPercents = require('./index.js');


describe("test persent", () => {
  it('what is persent of number all right', () => {
    expect(getPercents(30, 200)).toBe(60);
  }),

  it('what is 100 persent of number', () => {
    expect(getPercents(100, 200)).toBe(200);
  }),

  it('what is 0 persent of number', () => {
    expect(getPercents(0, 200)).toBe('Нельзя выбрать 0 процентов');
  }),

  it('what is -3 persent of number', () => {
    expect(getPercents(-3, 200)).toBe('Неверно введены данные');
  }),

  it('what is persent of wrong number', () => {
    expect(getPercents(10, -200)).toBe('Неверно введены данные');
  }),

  it('what is persent of number all wrong', () => {
    expect(getPercents(-10, -200)).toBe('Неверно введены данные');
  }),

  it('what is 120 persent of number', () => {
    expect(getPercents(120, 200)).toBe(240);
  }),

  it('what is String persent of number', () => {
    expect(getPercents('hi', 200)).toBe('Не верный формат ввода');
  }),

  it('what is persent of String number', () => {
    expect(getPercents(10, 'hi')).toBe('Не верный формат ввода');
  }),

  it('what is String persent of String number', () => {
    expect(getPercents('hello', 'hi')).toBe('Не верный формат ввода');
  })

})