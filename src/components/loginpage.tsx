import React, { useState } from 'react';

interface Props {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<Props> = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      console.log('Server response:', data);

      if (res.ok) {
        onLoginSuccess();
      } else {
        setError('Login failed. Try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Server error. Please try later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
