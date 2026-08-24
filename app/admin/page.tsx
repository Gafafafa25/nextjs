// import {useState} from "react";
//
// const emptyForm = {
//     name: "",
//     price: "",
//     image: "", //todo: path
//     description: ""
// }
//
// function AdminPage() {
//     const [form, setForm] = useState(emptyForm)
//     const handleSubmit = () => {
//         //todo:
//     }
//
//     return (
//         <main>
//             <section>
//                 <h1>Admin</h1>
//                 <p>Add product</p>
//                 <form onSubmit={handleSubmit}>
//                     {/*todo: input - required, label, placeholder for price and others */}
//                     <label>Name
//                         <input type="text" value={form.name}
//                                onChange={(e) => {
//                                    setForm({...form, name: e.target.value})
//                                }}
//                                required/>
//                     </label>
//                     <label>Image path
//                         <input type="text" value={form.image}
//                                onChange={(e) => {
//                                    setForm({...form, image: e.target.value})
//                                }}
//                                required/>
//                     </label>
//
//                 </form>
//             </section>
//         </main>
//     )
// }
//
// export default AdminPage;