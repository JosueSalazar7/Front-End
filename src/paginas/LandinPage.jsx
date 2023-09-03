import logoDarkMode from '../assets/dark.png'
import paw from "../assets/paw.png"
import vet from "../assets/vet.avif"
import vet1 from "../assets/vet1.jpg"
import vet2 from "../assets/vet2.jpg"
import vet3 from "../assets/vet3.jpg"
import { useState } from 'react'
import {Link} from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" :""}>

            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
                <section>
                    <nav className='p-10 mb-12 flex justify-between'>
                        <h1 className='text-2xl font-bold dark:text-white'>DOGY-CARE</h1>
                        <ul className='flex items-center'>
                            <li><img onClick={()=>setdarkMode(!darkMode)} className='cursor-pointer' src={logoDarkMode} alt="logo" width={40} height={40}/></li>
                            <li><Link to="/login" className='bg-gray-600 text-slate-400 px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white' href="#">iniciar sesión</Link></li>
                        </ul>
                    </nav>

                    <div className='text-center'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Clinica veterinaria</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Más que una consulta es crear un vinculo</h3>
                    </div>

                    <div className='text-5xl flex justify-center gap-16 py-3'>
                        <img src={paw} alt="logo-redes" width={50} height={50}  className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={paw} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={paw} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>
                    </div>

                    <div className='relative mx-auto bg-gradient-to-b from-indigo-400 rounded-full w-96 h-96 mt-12 overflow-hidden md:w-96 md:h-96 dark:border-4 border-teal-300'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img src={vet} alt="vet" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </section>

                <section>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-4 dark:text-white'>Servicios</h1>
                    </div>

                    <div className='md:flex md:flex-wrap lg:flex lg:justify-center gap-10'>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                            <img className='w-full h-full object-cover' src={vet1} alt="" />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>VACUNACIONES</h3>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-300'>
                            <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                            <img className='w-full h-full object-cover' src={vet2} alt="" />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>CIRUGÍA</h3>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                            <img className='w-full h-full object-cover' src={vet3} alt="" />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>DESPARASITACIONES</h3>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='bg-gray-800 text-white py-8'>
                    <div className='container mx-auto text-center'>
                        <div className='grid grid-cols-3 gap-8'>
                            <div>
                                <h3 className='text-lg font-semibold mb-4'>Contáctanos</h3>
                                <ul className='text-sm'>
                                <li>+593 0000 565</li>
                                <li><a href='mailto:demomail@gmail.com'>demomail@gmail.com</a></li>
                                <li>Quito - Ecuador</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-4'>Nuestros Servicios</h3>
                                <ul className='text-sm'>
                                <li>Seguro para Mascotas</li>
                                <li>Cirugías para Mascotas</li>
                                <li>Adopción de Mascotas</li>
                                <li>Seguro para Perros</li>
                                <li>Seguro para Gatos</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-4'>DOGY-CARE</h3>
                                <p>Clínica Veterinaria</p>
                            </div>
                        </div>
                        <p className='mt-8'>
                        ©{new Date().getFullYear()} Todos los derechos reservados | Este sitio fue creado
                        <i className='ti-heart' aria-hidden='true'></i> por SOFTWARO
                        </p>
                    </div>
                </footer>
        </div>
    )
}