// 1
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
};

// 2
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

console.log(result);

// 3
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
 sum += numbers[index];
};

let average = sum / numbers.length;

console.log(average);

// 4
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

result = result / numbers.length;

if (result > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20')
};

// 5
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
};

console.log(higherNumber);

// 6
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
};

if (result === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(result);
};

// fatorial
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
};

console.log(fatorial);

// inverter palavra
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

// asteriscos 1
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
};

// piramide asteriscos
let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    inputLine = inputLine + symbol;
    };
    console.log(inputLine);

    // asteriscos 2
    let n = 5;
    let symbol = '*';
    let inputLine = '';
    let inputPosition = n -1;

    for (let lineIndex = 0; lineIndex < n; lineIndex +=1) {
        for (let columnIndex = 0; columnIndex < n; columnIndex +=1) {
            if (columnIndex < inputPosition) {
                inputLine = inputLine + ' ';
            } else {
                inputLine = inputLine + symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    };

    // manipulação de objeto
    const reader = {
        name: 'Julia',
        lastName: 'Pessoa',
        age: 21,
        favoriteBooks: [
            {
                title: 'O Senhor dos Anéis - a Sociedade do Anel',
                author: 'J. R. R. Tolkien',
                puplisher: 'Martins Fontes',
            },
        ],
    }
    console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'.`);

    // exercicio 2
    reader.favoriteBooks.push({
            title: 'Harry Potter e o Prisioneiro de Azkaban',
            author: 'JK Rowling',
            publisher: 'Rocco',
        });

    console.log(reader);

    // exercicio 3
    const numFavoriteBooks = reader.favoriteBooks.length;

    numFavoriteBooks > 1
    ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`)
    : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);

    // Manipulação de objeto: parte 2
    const order = {
        name: 'Rafael Andrade',
        phoneNumber: '11-98763-1416',
        address: {
          street: 'Rua das Flores',
          number: '389',
          apartment: '701',
        },
        order: {
          pizza: {
            marguerita: {
              amount: 1,
              price: 25,
            },
            pepperoni: {
              amount: 1,
              price: 20,
            },
          },
          drinks: {
            coke: {
              type: 'Coca-Cola Zero',
              price: 10,
              amount: 1,
            },
          },
          delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
          },
        },
        payment: {
          total: 60,
        },
      };
      
      const customerInfo = (fullOrder) => {
        const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
        const costumerName = fullOrder.name;
        const phoneNumber = fullOrder.phoneNumber;
        const street = fullOrder.address.street;
        const addresNumber = fullOrder.address.number;
        const apartment = fullOrder.address.apartment;

        return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addresNumber}, AP: ${apartment}.`; 
      }
      
      console.log(customerInfo(order));
      
      const orderModifier = (fullOrder) => {
        fullOrder.name = 'Luiz Silva';
        fullOrder.payment.total = 50;

        const pizzas = Object.keys(fullOrder.order.pizza).join(', ');

        return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total},00.`;
      }
      
      console.log(orderModifier(order));

    //   Manipulação Objetos: Parte 3
    const school = {
        lessons: [
          {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
          },
          {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
          },
          {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
          },
          {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
          },
        ]
      };

      const getValueByNumber = (obj,index) => Object.values(obj)[index];

      console.log(getValueByNumber(school, 0));

      const getNumberOfStudents = (obj) => {
        let count = 0;
        for (let index = 0; index < obj.lessons.length; index += 1) {
            count += obj.lessons[index].students;
        }

        return count;
      }

      console.log(getNumberOfStudents(school));

      const verifyProp = (obj, key) => {
        for (let index = 0; index < obj.lessons.length; index += 1) {
            if (obj.lessons[index][key] === undefined) {
                return false;
            }
        }
        return true;
      }

      console.log(verifyProp(school, 'professor'));

      const changeKey = (obj, course, value) => {
        let findCourse;
        for (let index = 0; index < obj.lessons.length; index += 1) {
            let element = obj.lessons[index];
            if (element.course === course) {
                findCourse = element;
                break;
            }
        }
        if (findCourse !== undefined) {
            findCourse.shift = value;
            return findCourse;
        } else {
            return 'Curso não encontrado.';
        }
      };

      console.log(changeKey(school, 'Python', 'Noite'));

    //   Manipulação Objeto : Parte 4
    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
      ];

      const result = {};

      for (let index = 0; index < basket.length; index += 1) {
        let fruit = basket[index];
        if (!result[fruit]) {
            result[fruit] = 1;
        } else {
            result[fruit] += 1;
        }
      };

      const entries = Object.entries(result);

      let newArray = [];

      for (let index = 0; index < entries.length; index += 1) {
        if (entries[index][1] > 1) {
            newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
        } else {
            newArray.push(`${entries[index][1]} ${entries[index][0]}`);
        }
      };

      console.log(`Sua cesta possui: ${newArray.join(', ')}.`);