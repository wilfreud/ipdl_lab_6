export default function Message({
  name,
  job,
  age,
}: {
  name: string;
  job: string;
  age: number;
}) {
  return (
    <p className="bg-primary text-white display-5">
      This is a message from {name} who is a <b>{job}</b>. He's <b>{age}</b>{" "}
      years old.
    </p>
  );
}
