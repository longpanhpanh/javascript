// // function User(firstName, lastName, avatar) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.avatar = avatar;
// //   this.getName = function () {
// //     return `${this.firstName} ${this.lastName}`;
// //   };
// // }

// // var author = new User("Long", "Trần", "Avatar");
// // var girlFriend = new User("Panh", "Panh", "Avatar");

// // console.log(author.getName());
// // console.log(girlFriend.getName());

// // Làm việc với Object
// var titleKey = "title";

// var myInfo = {
//   name: "Long Trần",
//   age: 24,
//   girlFriend: "Panh",
//   phone: 0886549369,
//   [titleKey]: "LongPanhPanh",
//   getName: function () {
//     return this.name;
//   },
//   [titleKey]: "Panh Panh",
// };

// myInfo.address = "Hà Nội, VN";
// myInfo.email = "tranthanhlongita@gmail.com";
// // myInfo["addres"] = "Hà Nội, VN";
// var myKey = "address";
// console.log(myInfo);

// delete myInfo.age;

// console.log(myInfo);

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// var LongPanhPanh = new User("Long", "Trần", 24);
// console.log(LongPanhPanh);

// function getCurrentYear(year) {
//   var date = new Date();
//   var year = date.getFullYear();
//   return year;
// }

// // for (var value of Object.keys(myInfo)) {
// //   console.log(myInfo[value]);
// // }
// // Vòng này có thể dùng để lấy ra các phần tử của một mảng

// // for (var key in myInfo) {
// //   console.log(myInfo[key]);
// // }

// // Vòng lặp WHILE

// // var i = 0;
// // while (i < 100) {
// //   i++;
// //   console.log(i);
// // }

// // VÒNG LẶP DO WHILE

// // var i = 0;
// // var isSucces = false;

// // do {
// //   i++;
// //   console.log("Nạp thẻ lần " + i);

// //   // Thành công
// //   if (true) {
// //     isSucces = true;

// //   }
// // } while (!isSucces && i <= 3);

// // Break và continue trong vòng lặp

// // for (var i = 0; i <= 10; i++) {
// //   if (i % 2 != 0) {
// //     continue;
// //   }

// //   console.log(i);
// // }

// // VÒNG LẶP LỒNG NHAUI - NESTED LOOP

// // var myArray = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6]
// // ]

// // for (var i = 0; i < myArray.length; i++) {
// //   for (j = 0; j < myArray[i].length; j++) {
// //     console.log(myArray[i][j]);
// //   }
// // }

// // var courses = [
// //   {
// //     name: "Javascript",
// //     id: 4,
// //     coin: 250,
// //   },

// //   {
// //     name: "HTML, CSS",
// //     id: 3,
// //     coin: 0,
// //   },

// //   {
// //     name: "React JS",
// //     id: 2,
// //     coin: 250,
// //   },

// //   {
// //     name: "Responsive",
// //     id: 4,
// //     coin: 0,
// //   },

// //   {
// //     name: "Javascript",
// //     id: 5,
// //     coin: 250,
// //   },
// // ];

// // courses.forEach(function (course, index) {
// //   console.log(index, course);
// // });

// // var isFree = courses.every(function (course, index) {
// //   // kiểm tra xem tất cả các phần tử của mảng có thỏa mãn một điều kiện hay không
// //   return course.coin === 0;
// // });

// // var isPaid = courses.some(function (course, index) {
// //   // kiểm tra khi có ít nhất một phần tử của mảng có thỏa mãn điều kiện
// //   return course.coin !== 0;
// // });
// // console.log(isPaid);

// // var course = courses.find(function (course, index) {
// //   // Tìm kiếm một phần tử
// //   return course.name === "Javascript";
// // });

// // console.log(course);

// // var listCourse = courses.filter(function (course, index) {
// //   // Tìm kiếm tất cả phần tử
// //   return course.name === "Javascript";
// // });

// // console.log(listCourse);

// // var formValues = [
// //   { field: "name", value: "Long Trần" },
// //   { field: "age", value: 24 },
// //   { field: "address", value: "Hà Nội" },
// // ];

// var numbers = [1, 3, 10];

// function checkPositiveNumbers(numbers) {
//   var isPositive = numbers.every(function checkNumber(number) {
//     return number > 0;
//   });
// }

// checkPositiveNumbers(numbers);

// var courses = [
//   { name: "Javascript", vnd: 1000000 },
//   { name: "PHP", vnd: 990000 },
//   { name: "HTML, CSS", vnd: 0 },
// ];

// function hasFreeCourses(courses) {
//   var isFree = courses.some(function (course) {
//     return course.vnd === 0;
//   });
//   return isFree;
// }

// hasFreeCourses(courses);

// var monsters = [
//   {
//     name: "Cá heo",
//     attack: 50,
//     speed: 100,
//     hitpoint: 100,
//   },
//   {
//     name: "Khủng long",
//     attack: 150,
//     speed: 80,
//     hitpoint: 180,
//   },
//   // ...
// ];

// function findAMonsterByAttack(monsters) {
//   var findAttack = monsters.find(function (atk150) {
//     return atk150.attack === 150;
//   });
//   if (findAttack !== undefined) {
//     return findAttack;
//   } else {
//     return null;
//   }
// }

// console.log(findAMonsterByAttack(monsters));

// // var keyword = "PHP";

// // var strings = ["Javascript", "PHP", "Học PHP", "PHP Milo"];

// // function findStringsInArrayByKeyword(keyword, strings) {
// //   var newArray = strings.filter(function (char) {
// //     return char.includes(keyword);
// //   });
// //   return newArray;
// // }

// // console.log(findStringsInArrayByKeyword(keyword, strings));

// var array1 = [1, 2, 3, 4, 5];

// var array2 = [2, 4, 6];

// function findEqualValues(array1, array2) {
//   var newArray = [];
//   array1.filter(function (item) {
//     if (array2.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }

// findEqualValues(array1, array2);

// // var inputs = [1, "hi", false, 8, undefined, "", NaN];

// // function convertToBoolean(inputs) {
// //   var toBoolean = inputs.map(function (item) {
// //     return Boolean(item);
// //   });
// //   console.log(toBoolean);
// // }

// // convertToBoolean(inputs);

// // var inputs = [1, 3, 5];

// // function run(inputs) {
// //   var x3Value = inputs.map(function (input) {
// //     return input * 3;
// //   });
// //   console.log(x3Value);
// // }

// // run(inputs);

// // var inputs = [1, 2, 3, 4];

// // function convertToString(inputs) {
// //   var toString = inputs.map(function (input) {
// //     return String(input);
// //   });
// //   return toString;
// // }
// // convertToString(inputs);

// function getHtmlFromArray() {
//   var htmls = input.map(function (html) {
//     return `<li>${html}</li>`;
//   });
// }

// // var inputs = [1, 2, "hi", 3];

// // function sumNumbers(inputs) {
// //   var total = inputs.reduce(function (accumulator, currentValue) {
// //     if (typeof currentValue == "number" && !isNaN(currentValue)) {
// //       return (accumulator += currentValue);
// //     } else {
// //       return accumulator;
// //     }
// //   }, 0);
// //   return total;
// // }

// // sumNumbers(inputs);

// var bill = [
//   { name: "Giày", amount: 100 },
//   { name: "Áo phao", amount: 110 },
//   { name: "Smart phone", amount: 400 },
// ];

// function getTotalAmount(bill) {
//   var totalAmount = bill.reduce(function (accumulator, currentValue) {
//     return (accumulator += currentValue.amount);
//   }, 0);
//   return totalAmount;
// }

// // var numbers2 = [1, 2, 3, 4];

// // Array.prototype.reduce2 = function (callback, result) {
// //   let i = 0;
// //   if (arguments.length < 2) {
// //     i = 1;
// //     result = this[0];
// //   }
// //   for (; i < this.length; i++) {
// //     result = callback(result, this[i], i, this);
// //   }
// //   return result;
// // };

// // var total = numbers2.reduce2(function (sum, number) {
// //   return sum + number;
// // });

// // console.log(total);

// // Tự viết hàm forEach2, every2, some2, find2, map2

// var courses = [
//   {
//     name: "Javascript",
//     coin: 500,
//     isFinish: true,
//   },
//   {
//     name: "Javascript",
//     coin: 500,
//     isFinish: false,
//   },
//   {
//     name: "Javascript",
//     coin: 500,
//     isFinish: false,
//   },
//   {
//     name: "Javascript",
//     coin: 500,
//     isFinish: true,
//   },
// ];

// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// courses.forEach2(function (course, index, array) {
//   console.log(index, course);
// });

// // 1. Object prototype
// // 2. dùng vòng lặp for in
// // 3. phương thức hasOwnProperty

// Array.prototype.filter2 = function (callback) {
//   for (var index in this) {
//     var output = [];
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
// };

// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index], index, this)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var checkFinish = courses.some2(function (course, index) {
//   return course.isFinish === true;
// });

// console.log(checkFinish);

// Array.prototype.every2 = function (callback) {
//   var output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (!result) {
//         output = false;
//         break;
//       }
//     }
//   }
// };

// var h1Element = document.querySelector(".heading");
// console.log(h1Element);
// h1Element.onclick = function (e) {
//   console.log(e.target);
// };

// var h1Element = document.getElementById("heading");
// h1Element.onclick = function () {
//   console.log("abc");
// };

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms)
//  })
// };

// sleep(1000)
//   .then(function () {
//     console.log(1)
//     return sleep(1000);
//   })

//   .then(function () {
//     console.log(2)
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(3)
//     return sleep(1000);
//   })

// var users = [
//   {
//     name: "Phương Anh Bian",
//     id: 1,
//   },
//   {
//     name: "Long Trần",
//     id: 2,
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: "Long ơi em yêu anh",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: "Anh cũng rất yêu em",
//   },
//   {
//     id: 3,
//     user_id: 1,
//     content: "Cảm ơn anh",
//   },
// ];

// function getUserByIds(userIds) {
//   return new Promise(function (resolve) {
//     var result = users.filter(function (user) {
//       return userIds.includes(user.id);
//     });
//     setTimeout(function () {
//       resolve(result);
//     }, 1000);
//   }, 1000);
// }

// function getComments() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(comments);
//     }, 1000);
//   });
// }

// getComments()
//   .then(function (comments) {
//     var userIds = comments.map(function (comment) {
//       return comment.user_id;
//     });
//     return getUserByIds(userIds).then(function (users) {
//       console.log(users);
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//     var commentBlock = document.getElementById("comment-block");
//     var html = "";
//     data.comments.forEach(function (comment) {
//       var user = data.users.find(function (user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
//   });

//   var postApi = "https://jsonplaceholder.typicode.com/posts";
// fetch(postApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (posts) {
//     var htmls = posts.map(function (post) {
//       return `<li>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       </li>`;
//     })
//     var html = htmls.join('');
//     document.getElementById('post-block').innerHTML = html;
//   })

// var courseApi = "http://localhost:3000/course";
// fetch(courseApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (courses) {
//     console.log(courses);
//   });

// var courseApi = "http://localhost:3000/course";

// function start() {
//   getCourses(renderCourses);
//   handleCreateForm();
// }

// start();

// // Function với course

// function getCourses(callback) {
//   fetch(courseApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(callback);
// }

// function createCourse(data, callback) {
//   var option = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   fetch(courseApi, option)
//     .then(function (response) {
//       response.json();
//     })
//   .then(callback)

// }

// function renderCourses(courses) {
//   var listCoursesBlock = document.querySelector("#list-courses");
//   var htmls = courses.map(function (course) {
//     return `
//     <li class="course-item-${course.id}">
//       <h4>${course.name}</h4>
//       <p>${course.description}</p>
//       <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//       <button id="edit" onclick="handlePutCourse(${course.id})">Sửa</button>
//     </li>

//     `;
//   });
//   listCoursesBlock.innerHTML = htmls.join("");
// }

// function handleCreateForm() {
//   var createBtn = document.querySelector("#create");

//   createBtn.onclick = function () {
//     var name = document.querySelector('input[name="name"]').value;
//     var description = document.querySelector('input[name="description"]').value;

//     var formData = {
//       name: name,
//       description: description
//     }

//     // createCourse(formData, function () {
//     //   getCourses(renderCourses);
//     // });
//     createCourse(formData);
//   };
// }

// function handleDeleteCourse(id) {
//   var option = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   fetch(courseApi + "/" + id, option)
//     .then(function (response) {
//       response.json();
//     })
//     .then(function () {
//       var courseItem = document.querySelector('.course-item-' + id)
//       if (courseItem) {
//         courseItem.remove();
//       }
//     })
// }

// const sum = (a, b) => ({ a: a, b: b })

// console.log(sum(2, 2));

// function logger (log = 'Giá trị mặc định') {

//   console.log(log)
// }

// var fieldName = "name";
// var fieldPrice = "price";

// const course = {
//   [fieldName]: "Javascript",
//   [fieldPrice]: 1000,
// };

// console.log(course);

// var course = {
//   name: "Javascript",
//   price: 1000,
//   description: "Đây là description",
//   children: {
//     name: "PHP",
//   },
// };

// var {
//   name,
//   price,
//   children: { name: childrenName },
// } = course;

// console.log(childrenName);

// function highlight([first, ...strings], ...values) {
//   return values.reduce(
//     (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]
//   )
//   .join('')
// }

// var brand = "F8";
// var course = "Javascript";

// var html = highlight`Học lập trình ${course} tại ${brand}!`;

// console.log(html);

// function highlight([first, ...strings], ...values) {
//   return values
//     .reduce(
//       (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//       [first]
//     )
//     .join("");
// }

const nums = [1, 1, 0, 1, 1, 1];

function findMaxConsecutive(nums, length) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count = 0;
    } else {
      count++;
      result = Math.max(result, count)
    }
  }
}

findMaxConsecutive(nums);
