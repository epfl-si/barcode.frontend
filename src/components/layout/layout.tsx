import {Header} from "@/components/layout/header.tsx";
import {Body} from "@/components/layout/body.tsx";
import {Footer} from "@/components/layout/footer.tsx";

export const Layout = ({ user }: { user: any }) => {

  return (
    <div className="site d-flex flex-column min-vh-100">
      <Header user={user}/>
      <Body />
      <Footer />
    </div>
  );
}
