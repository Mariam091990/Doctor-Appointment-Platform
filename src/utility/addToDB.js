const getStoredDoctor = () => {

 const storedDoctorSTR= localStorage.getItem("bookingList");

if (storedDoctorSTR) {
    const storedDoctorData= JSON.parse(storedDoctorSTR);
    return storedDoctorData;
}
else{

    return [];
}
}

const addToStoredDB = (registrationNumber) => {

const storedDoctorData = getStoredDoctor();

if (storedDoctorData.includes (registrationNumber)) {
 alert("already  exist")  
}
else{
storedDoctorData.push (registrationNumber);

const data = JSON.stringify(storedDoctorData)
localStorage.setItem("bookingList" ,data)

// console.log(storedDoctorData);
}
}

const removeFromDB = (registrationNumber) => {
  const storedData = getStoredDoctor();
  console.log(" Remove:", registrationNumber);
  console.log("stored data", storedData);
//   console.log(storedData.includes(registrationNumber));
//   const remainingData = storedData.filter(
//     doctor => doctor.registrationNumber !== registrationNumber
//   );
const remainingData = storedData.filter(number => {
    const match = number.trim() !== registrationNumber.trim();
    console.log(`Comparing "${number}" to "${registrationNumber}" → keep: ${match}`);
    return match;
  });
console.log("After Remove:", remainingData);
 const cartStringify = JSON.stringify (remainingData)
 console.log(cartStringify);
 localStorage.setItem("bookingList", cartStringify)

}






export {addToStoredDB, getStoredDoctor, removeFromDB};