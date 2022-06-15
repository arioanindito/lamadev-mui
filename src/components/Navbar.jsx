import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledToolBar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	return (
		<AppBar position="sticky">
			<StyledToolBar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					LOGO
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="Search..." />
				</Search>
				<Icons>
					<Badge badgeContent={2} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar sx={{ display: { width: "30px", height: "30px" } }} />
				</Icons>
				<UserBox>
					<Avatar sx={{ display: { width: "30px", height: "30px" } }} />
					<Typography variant="h6">User</Typography>
				</UserBox>
			</StyledToolBar>
		</AppBar>
	);
};

export default Navbar;
