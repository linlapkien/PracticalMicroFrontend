import Products from '@/components/Products';

const admin = () => {
  const currentTime = new Date().toLocaleTimeString();
  console.log('This is an admin page shop app');
  return (
    <div>
      <h1>The current time is: {currentTime}</h1>
      <Products />
    </div>
  );
};

export default admin;
