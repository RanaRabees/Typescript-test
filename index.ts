// // ------------------------------------ Typescript Test

// // console.log("Create a Map Function for Objects");

// const MyBioObject:
//     {
//         name: string,
//         father_name: string,
//         test_name: string,
//         age: number,
//          height: number,
//         gender: string,
//         test: boolean
//     } = {
//     name: "Rana Rabees",
//     father_name: "Rana Amir",
//     test_name: "Typescript",
//     age: 13,
//     height: 180,
//     gender: "male",
//     test: true
// };

// const myBiomap = new Map(Object.entries(MyBioObject));
// console.log(myBiomap);



function multiply(howmanystars: any) {
    let stercs = "";
    for (let i = howmanystars; i >= 1; i--) {
        for (let s = 0; s < i; s++) {
            stercs += "* ";
        }
        stercs += "\n";
    }
    console.log(stercs);
    alert("Your Multiply chart is below" + stercs);
    // document.write(stercs);
    return stercs;
}

multiply(7)