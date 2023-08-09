function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('One of the parameters is not number');
  }

  return a + b;
}

try {
  console.log(sum('1', 2));
} catch (error) {
  if (error instanceof Error) {
    console.error('Instance of Error');
  } else if (error instanceof TypeError) {
    console.error('Instance of TypeError');
  } else {
    console.error(error);
  }
}

const value = Infinity;

// truthy -> true, ' ', < 0 >, [], {}, Infininy
// falsy -> false, '', 0, null, undefined, NaN

if (value) {
  console.log('Abcdef');
}

const pizza = 'peperoni';

switch (pizza) {
  case 'calabresa':
  case 'mussarela': {
    console.log('Pizza Misto...');
    break;
  }

  default: {
    console.log(`Pizza de ${pizza}`);
  }
}
