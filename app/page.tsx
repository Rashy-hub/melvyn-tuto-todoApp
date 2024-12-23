import { redirect } from 'next/navigation';

export default function App() {
  redirect(`/home`); // Navigate to the new post page
  return null;
}
