const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);
  setError(null);
  const formData = new FormData(event.currentTarget);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  // Client-side password checks (but must also do these server-side)
  if (password !== confirmPassword) {
    setError('Passwords do not match');
    setLoading(false);
    return;
  }
  if (password.length < 8) {
    setError('Password must be at least 8 characters.');
    setLoading(false);
    return;
  }
  // Optional: Add more password strength checks here

  // Call backend registration and handle specific errors
  const result = await register({ name, email, password });
  if (result?.error) {
    // Avoid leaking backend errors, show generic message
    setError('Registration failed. Please check your details and try again.');
    setLoading(false);
  } else {
    window.location.href = '/polls';
  }
