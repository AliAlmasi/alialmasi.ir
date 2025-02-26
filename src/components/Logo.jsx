export default function Logo({ logoName }) {
  if (!logoName) return null;
  return <i>{logoName}</i>;
}
