<template>
	<div id="roomRes">
		<vheader></vheader>
		<div class="maincontain">
			<div class="item" v-for="(item, index) in imgList" :key="index" @click="roomReservation(item)">
				<img src="../../assets/images/room.png">
				<div
					class="mask"
					:style="{
						backgroundColor: item.status ? 'rgba(255, 0, 0, 0.411)' : ''
					}"
				></div>
				<div class="title">{{item.value}}</div>
			</div>
		</div>
		<vfooter></vfooter>
		<!-- 已预约提示框 -->
		<el-dialog title="Warning" :visible.sync="showGone" width="30%" center>
			<div class="bodyMessage">
				<span>该座位已被预约</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="showGone = false">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 预约弹出框 -->
		<el-dialog title="会议室信息" :visible.sync="showExist" width="30%" center>
			<div class="seatMessage">
				<div>{{roomNum}}号会议室</div>
				<br>
				<span>时间：</span>
				<br>
				<span>{{ getTime() }}--{{ getTimeLater() }}</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="showExist = false">取 消</el-button>
				<el-button type="primary" @click="checkAgain">预 约</el-button>
			</span>
		</el-dialog>

		<!-- 二次确认框 -->
		<el-dialog :visible.sync="checkTwice" width="20%" center>
			<div class="seatMessage">
				<span>确认预约？</span>
			</div>
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
				showGone: false,
				showExist: false,
				date: "",
				checkTwice: false,
				roomNum: "",
				imgList: [
					{ value: "一号会议室", num: 1, status: 1, lock: false },
					{ value: "二号会议室", num: 2, status: 0, lock: false },
					{ value: "三号会议室", num: 3, status: 0, lock: true }
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
			roomReservation(item) {
				if (item.status) {
					this.showGone = true;
				} else {
					this.roomNum = item.num;
					this.showExist = true;
				}
				if (item.lock) {
					this.date = "取消锁定";
				} else {
					this.date = "锁 定";
				}
			},
			checkAgain() {
				this.checkTwice = true;
				this.showExist = false;
			},
			reservationSubmit() {
				this.checkTwice = false;
			}
		}
	};
</script>

<style scoped>
	#roomRes {
		width: 100%;
		background-color: #cccccc;
	}
	.maincontain {
		max-width: 1100px;
		min-height: calc(100vh - 144px);
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.item {
		width: 500px;
		height: 350px;
		border: 2px solid #000;
		border-radius: 15px;
		overflow: hidden;
		margin: 5px 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item:hover {
		cursor: pointer;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
	}
	.mask {
		width: 500px;
		height: 350px;
		border-radius: 10px;
		position: absolute;
		z-index: 100;
	}
	.title {
		width: 42px;
		height: 260px;
		font-size: 40px;
		font-weight: 700;
		position: absolute;
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
