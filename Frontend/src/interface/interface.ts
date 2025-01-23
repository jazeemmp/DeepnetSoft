export interface FormValues {
    menuName: string;
    menuDescription: string;
    itemName: string;
    description: string;
    price: number;
  }
  
  export interface MenuModalProps {
    setOpenModal: (openModal: boolean) => void;
    handleSubmit: (values: FormValues) => void;
  }
  