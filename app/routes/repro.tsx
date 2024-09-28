import { createFileRoute } from "@tanstack/react-router";
import { setUserSession } from "./__root";

export const Route = createFileRoute("/repro")({
  component: Repro,
});

function Repro() {
  const { user } = Route.useRouteContext();
  return (
    <div>
      {user}
      <button type="button" onClick={() => setUserSession()}>
        Set User
      </button>
    </div>
  );
}
