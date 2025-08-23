import FormAngular from "@/components/forms/angular/FormAngular";
import FormJS from "@/components/forms/js/FormJS";
import FormReact from "@/components/forms/react/FormReact";
import FormTS from "@/components/forms/ts/FormTS";
import FormVue from "@/components/forms/vue/FormVue";
import Generate from "@/components/generate/Generate";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const renderForm = () => {
    switch (slug) {
      case "js":
        return <FormJS />;
      case "ts":
        return <FormTS />;
      case "angular":
        return <FormAngular />;
      case "react":
        return <FormReact />;
      case "vue":
        return <FormVue />;
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <main className="main-wrapper">
        <Navbar />
        <div className="form-wrapper">
          {renderForm()}
          <Generate />
        </div>
      </main>
    </div>
  );
}
