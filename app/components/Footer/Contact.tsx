import { Box, Button, Input } from "@mui/material";

const Contact = () => {
  return (
    <div className="flex flex-col gap-1 md:gap-3 px-3 md:px-10 ">
      <div className="font-bold text-lg md:text-xl ">Bizimlə əlaqə saxlayın</div>
      <div>
        <form action="">
          <Box
            sx={{
              py: 2,
              display: "grid",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white rounded-full px-2 py-2 md:px-4 text-black border-none outline-none"
              placeholder="Email"
            />
          </Box>
          <button
            type="submit"
            className="bg-black px-3 md:px-10 py-2 rounded-full font-bold hover:text-black hover:bg-white transition-colors duration-500 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
