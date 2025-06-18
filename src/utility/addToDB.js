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


export {addToStoredDB};