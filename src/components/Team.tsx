export default function Team({ name, title }: { name: string; title: number }) {
  return (
    <p
      className={
        "alert " +
        (title === 0
          ? "alert-danger"
          : title < 10
          ? "alert-warning"
          : "alert-success")
      }
    >
      Team {name} has {title} trophies.
    </p>
  );
}
