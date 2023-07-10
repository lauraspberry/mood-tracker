
interface MyComponentProps {
    name: string;
    age: number;
}
  
const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
    return (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
    </div>
    );
};
  
export default MyComponent;
  