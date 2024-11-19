import React, { useState } from 'react';

const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();

//     if (Object.keys(newErrors).length === 0) {
//       // Here you would typically make an API call to authenticate the user
//       console.log('Form submitted:', formData);
//       setErrors({});
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

  return (
            // ຄຳສັ່ງລົງແຖ້ວ flex-col
        <div className='flex flex-col justify-between w-full'>
          {/* hover:text-2xl transition duration-300 ease-in-out   ຂະຫຍາຍຂໍຄວາມ*/}
          <div className='text-red-200 hover:text-2xl transition duration-300 ease-in-out'> 
          
            <h1>Hello everyone</h1>
            
          </div>
          
    
           {/* hover:text-2xl transition duration-300 ease-in-out   ຂະຫຍາຍຂໍຄວາມ*/}
          <div className='text-blue-500 hover:text-2xl transition-all duration-700 ease-in-out'>
         
           <h1>we love god...</h1>
          
          </div>
        </div>
       
       
        
        
  )

};
  

{/* //     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <input */}
{/* //                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="Enter email"
//               />
//               {errors.email && ( */}
{/* //                 <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
//                   <AlertCircle className="h-4 w-4" />
//                   {errors.email}
//                 </div>
//               )}
//             </div> */}

{/* //             <div>
//               <label className="block text-sm font-medium mb-1">Password</label>
//               <input */}
{/* //                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="Enter password"
//               />
//               {errors.password && ( */}
{/* //                 <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
//                   <AlertCircle className="h-4 w-4" />
//                   {errors.password}
//                 </div>
//               )}
//             </div> */}

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
//             >
//               <LogIn className="h-5 w-5" />
//               Login
//             </button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );


export default LoginPage;
