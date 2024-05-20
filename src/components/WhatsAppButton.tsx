const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "34680576629";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800  hover:scale-105 transition-colors"
      aria-label="WhatsApp Chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-9  h-9"
      >
        <path
          fill="#25d366"
          d="M16 0c-8.837 0-16 7.163-16 16 0 2.833.73 5.523 2.117 7.946l-2.242 8.055 8.167-2.136c2.347 1.26 4.978 1.945 7.958 1.945 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.131c-2.515 0-4.928-.665-7.059-1.921l-.506-.299-4.851 1.268 1.296-4.732-.326-.512c-1.322-2.075-2.023-4.482-2.023-6.935 0-7.574 6.159-13.732 13.732-13.732s13.732 6.159 13.732 13.732c0 7.574-6.159 13.732-13.732 13.732z"
        ></path>
        <path
          fill="#fff"
          d="M16.005 4.844c-5.994 0-10.863 4.868-10.863 10.863 0 2.144.635 4.165 1.738 5.872l-1.147 4.192 4.333-1.131c1.644.899 3.51 1.417 5.501 1.417 5.993 0 10.863-4.868 10.863-10.863s-4.87-10.863-10.863-10.863zm6.159 15.318c-.259.732-1.515 1.422-2.067 1.508-.535.083-1.198.11-1.936-.118-.448-.143-1.027-.334-1.787-.661-.875-.373-1.666-.918-2.369-1.615-2.284-2.204-2.901-3.892-2.891-6.08.004-.507.131-1.039.39-1.546.379-.736.787-1.077 1.089-1.077h.788c.198 0 .465.057.726.531.291.528.939 1.825 1.019 1.957.08.131.129.273.025.482-.095.201-.143.326-.271.506-.143.193-.307.436-.438.585-.144.16-.294.335-.126.635.169.3.751 1.235 1.61 2.011 1.108.992 2.043 1.292 2.34 1.458.291.159.464.143.634-.083.168-.221.729-.852.922-1.146.193-.293.39-.243.661-.146.271.097 1.709.805 2 1.002.297.196.497.293.57.456.079.163.079.935-.18 1.667z"
        ></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
