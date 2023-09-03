import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Mensaje from "../componets/Alertas/Mensaje";

export const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [mensaje, setMensaje] = useState({});

    const onSubmit = async (data) => {
        const trimmedData = Object.keys(data).reduce((acc, key) => {
            acc[key] = typeof data[key] === 'string' ? data[key].trim() : data[key];
            return acc;
        }, {});
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`;
            const respuesta = await axios.post(url, trimmedData);
            setMensaje({ respuesta: respuesta.data.msg, tipo: true });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
        }
    };

    return (
        <>
            <div className="bg-white flex justify-center items-center w-1/2">
                <div className="md:w-4/5 sm:w-full">
                    {Object.keys(mensaje).length > 0 && (
                        <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
                    )}
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">
                        Bienvenido
                    </h1>
                    <small className="text-gray-400 block my-4 text-sm">
                        Por favor ingresa tus datos
                    </small>

                    {/* <form onSubmit={handleSubmit}> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label
                                htmlFor="nombre"
                                className="mb-2 block text-sm font-semibold"
                            >
                                Nombre:
                            </label>
                            <Controller
                                name="nombre"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'Ingresa solo letras en este campo',
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Ingresa tu nombre"
                                            maxLength={40}
                                            className={`block w-full rounded-md border ${errors.nombre ? 'border-red-500' : 'border-gray-300'
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                className="mb-2 block text-sm font-semibold"
                                htmlFor="apellido"
                            >
                                Apellido:
                            </label>
                            <Controller
                                name="apellido"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'Ingresa solo letras en este campo',
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Ingresa tu apellido"
                                            maxLength={40}
                                            className={`block w-full rounded-md border ${errors.apellido ? "border-red-500" : "border-gray-300"
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.apellido && (
                                            <p className="text-red-500 text-sm">{errors.apellido.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                className="mb-2 block text-sm font-semibold"
                                htmlFor="direccion"
                            >
                                Dirección:
                            </label>
                            <Controller
                                name="direccion"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio"
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Ingresa tu dirección"
                                            maxLength={120}
                                            className={`block w-full rounded-md border ${errors.direccion ? "border-red-500" : "border-gray-300"
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.direccion && (
                                            <p className="text-red-500 text-sm">{errors.direccion.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                className="mb-2 block text-sm font-semibold"
                                htmlFor="telefono"
                            >
                                Teléfono:
                            </label>
                            <Controller
                                name="telefono"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    pattern: {
                                        value: /^[0-9]{1,15}$/,
                                        message: 'Ingresa solo números en este campo (hasta 15 dígitos)',
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="number"
                                            placeholder="Ingresa tu teléfono"
                                            className={`block w-full rounded-md border ${errors.telefono ? "border-red-500" : "border-gray-300"
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.telefono && (
                                            <p className="text-red-500 text-sm">{errors.telefono.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                className="mb-2 block text-sm font-semibold"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Formato de correo electrónico inválido",
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "El email debe tener un máximo de 60 caracteres",
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Introduce tu correo electrónico"
                                            maxLength={60} 
                                            className={`block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                                                } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                className="mb-2 block text-sm font-semibold"
                                htmlFor="password"
                            >
                                Contraseña:
                            </label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    maxLength: {
                                        value: 60,
                                        message: "La contraseña debe tener un máximo de 60 caracteres",
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="********************"
                                            className={`block w-full rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"
                                                } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500`}
                                            required
                                        />
                                        {errors.password && (
                                            <p className="text-red-500 text-sm">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <button className="bg-gray-500 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">
                                Registrate
                            </button>
                        </div>
                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 "></div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link
                            to="/login"
                            className="py-2 px-5 bg-gray-500 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 "
                        >
                            iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="w-1/2 h-screen bg-[url('/public/images/dogregister.jpg')] 
            bg-no-repeat bg-cover bg-center sm:block hidden
            "
            ></div>
        </>
    );
};
