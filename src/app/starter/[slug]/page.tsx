import FormJS from "@/components/forms/js/FormJS";
import Generate from "@/components/generate/Generate";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);

  return (
    <div className="container">
      <Sidebar />
      <main className="main-wrapper">
        <Navbar />
        <div className="form-wrapper">
          <FormJS />
          <Generate />
        </div>
      </main>
    </div>
  );
}
