import { useForm } from "react-hook-form";

const InfoForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
    },
  });

  return <form></form>;
};

export default InfoForm;
