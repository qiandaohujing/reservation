<template>
	<div id="seatRes">
		<vheader></vheader>

		<div class="maincontain">
			<div
				class="item"
				v-for="(item, index) in seatList"
				:key="index"
				@click="seatReservation(item)"
			>
				<div
					class="mask"
					:style="{
						backgroundColor: item.status ? 'rgba(255, 0, 0, 0.411)' : ''
					}"
				>
					<span class="numberSigh">{{ item.index }}</span>
				</div>
				<img src="../../assets/images/seat.png" />
			</div>
		</div>

		<vfooter></vfooter>

		<!-- 已预约提示框 -->
		<el-dialog title="Warning" :visible.sync="dialogVisible" width="30%" center>
			<div class="bodyMessage">
				<span>该座位已被预约</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false"
					>确 定</el-button
				>
			</span>
		</el-dialog>

		<!-- 预约弹出框 -->
		<el-dialog
			title="座位信息"
			:visible.sync="centerDialogVisible"
			width="30%"
			center
		>
			<div class="seatMessage">
				<div>二楼自习区</div>
				<div>8号自习座位</div>
				<br />
				<span>时间：</span>
				<br />
				<span>{{ getTime() }}--{{ getTimeLater() }}</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="checkAgain">预 约</el-button>
			</span>
		</el-dialog>

		<!-- 二次确认框 -->
		<el-dialog :visible.sync="checkTwice" width="20%" center>
			<div class="seatMessage"><span>确认预约？</span></div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="checkTwice = false">取 消</el-button>
				<el-button type="primary" @click="reservationSubmit">确 认</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import vheader from "../common/header";
import vfooter from "../common/footer";
import moment from "moment";
export default {
	components: { vheader, vfooter },
	data() {
		return {
			dialogVisible: false,
			centerDialogVisible: false,
			checkTwice: false,
			seatList: [
				{
					status: 1,
					index: 1
				},
				{
					status: 1,
					index: 2
				},
				{
					status: 1,
					index: 3
				},
				{
					status: 0,
					index: 4
				},
				{
					status: 0,
					index: 5
				},
				{
					status: 0,
					index: 6
				}
			]
		};
	},
	methods: {
		handleClose() {
			setTimeout(() => {
				this.dialogVisible = false;
			}, 100);
		},
		getTime() {
			return moment().format("YYYY年M月D日 HH:mm:ss");
		},
		getTimeLater() {
			return moment()
				.add(4, "h")
				.format("HH:mm:ss");
		},
		seatReservation(item) {
			console.log("date:", moment(new Date()).format("HH:mm:ss"));
			if (item.status) {
				this.dialogVisible = true;
			} else {
				this.centerDialogVisible = true;
			}
		},
		checkAgain() {
			this.checkTwice = true;
			this.centerDialogVisible = false;
		},
		reservationSubmit() {
			console.log("submit");
			this.checkTwice = false;
		}
	}
};
</script>

<style scoped>
#seatRes {
	width: 100%;
	height: 100%;
	/* background-color: #cccccc; */
}
.maincontain {
	max-width: 1100px;
	height: calc(100% - 144px);
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
}
.mask {
	width: 220px;
	height: 224px;
	border-radius: 15px;
	position: absolute;
	z-index: 100;
}
.numberSigh {
	font-size: 18px;
	color: #414cddb7;
	margin: 5px;
}
.item {
	margin: 10px 50px;
	border-radius: 15px;
	overflow: hidden;
}
.item:hover {
	cursor: pointer;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}
.bodyMessage {
	width: 100%;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
	color: #ff3300;
}
.seatMessage {
	width: 100%;
	text-align: center;
	font-size: 16px;
}
.seatMessage span {
	margin: 12px;
}
</style>
