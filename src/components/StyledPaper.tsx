import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {styled} from "@mui/system";

const StyledPaper = styled(Paper)({
    color: "#6B8068",
    backgroundColor: "silver",
    margin: "auto",
    borderRadius: 2,
    height: 300,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiButton-root" : { color: "#FF0000"}
    // backgroundImage: `url("https://picsum.photos/300/300")`
});


export default function StyledPaperExample(){
    return (
        <>
        <StyledPaper>
            <Button variant="outlined">Text</Button>
        </StyledPaper>
        </>
    )
}