import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

const LoginForm = () => {
  console.log(`<LoginForm /> rendered`);

  return (
    <form className="space-y-3 max-w-sm mx-auto">
      <Input placeholder="Username" />
      <Input placeholder="Email address" />
      <Input placeholder="Password" />
      <Textarea placeholder="Message" />

      <Button fullWidth>Send feedback</Button>
    </form>
  );
};

export default LoginForm;
