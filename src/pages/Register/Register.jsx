import React, { useState } from "react";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
   

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-4">
  <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Registrar
      </h2>
      <p className="mt-2 text-gray-600">
        Realize seu cadastro para começar a postar
      </p>
    </div>

    <div className="space-y-5">
      {/* Nome */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Nome Completo
        </label>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome completo"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* E-mail */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          E-mail
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="usuario@gmail.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* Senha */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Senha
        </label>

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* Confirmar Senha */}
      <div>
        <label
          htmlFor="passwordConfirmation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Confirmar Senha
        </label>

        <input
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full mt-8 rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700"
    >
      Criar Conta
    </button>
  </form>
</div>
  );
};

export default Register;
