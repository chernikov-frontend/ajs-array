import Daemon from '../Daemon';
import Magician from '../Magician';

test('Демон с аттакой 100 и дурманом', () => {
  const daemon = new Daemon('Lutik', null, 2);
  daemon.attack = 100;
  daemon.stoned = true;

  const result = 85;

  expect(daemon.attack).toBe(result);
});

test('Демон с аттакой 100 и без дурмана', () => {
  const daemon = new Daemon('Lutik', null, 2);
  daemon.attack = 100;
  daemon.stoned = false;

  const result = 90;

  expect(daemon.attack).toBe(result);
});

test('Волшебник с аттакой 100 и дурманом', () => {
  const merlin = new Magician('Potter', null, 3);
  merlin.attack = 100;
  merlin.stoned = true;

  const result = 72;

  expect(merlin.attack).toBe(result);
});

test('Волшебник с аттакой 100 и без дурмана', () => {
  const merlin = new Magician('Merlin', null, 3);
  merlin.attack = 100;
  merlin.stoned = false;

  const result = 80;

  expect(merlin.attack).toBe(result);
});

test('дурман = true', () => {
  const potter = new Magician('Potter', null, 3);
  potter.stoned = true;
  expect(potter.stoned).toBe(true);
});

test('ошибка значения дурман', () => {
  const potter = new Magician('Potter', null, 3);
  
  expect(() => potter.stoned = 'true').toThrow();
});
