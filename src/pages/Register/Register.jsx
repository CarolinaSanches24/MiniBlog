import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirmation, setPassConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password != passwordConfirmation) {
      setError("As senhas precisam ser iguais");
      return;
    }
    console.log(user);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Registrar</h2>
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
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
              required
              placeholder="usuario@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <div className="relative">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-gray-900 rounded-lg border border-gray-300 px-4 py-3 pr-12 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirmar Senha */}
          <div>
            <label
              htmlFor="passwordConfirmation"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirmar Senha
            </label>

            <div className="relative">
            <input
              id="passwordConfirmation"
              type={showPassConfirmation ? "text" : "password"}
              name="passwordConfirmation"
              required
              placeholder="Confirme sua senha"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full text-gray-900 rounded-lg border border-gray-300 px-4 py-3 pr-12 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
                type="button"
                onClick={() => setPassConfirmation(!showPassConfirmation)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassConfirmation ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700"
        >
          Criar Conta
        </button>
        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border-l-4 border-red-500 bg-red-100 p-4 text-red-700 shadow-sm">
            <span className="text-xl">🚫</span>
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
