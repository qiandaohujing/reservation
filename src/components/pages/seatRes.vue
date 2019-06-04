<template>
	<div id="seatRes">
		<vheader></vheader>

		<div class="maincontain">
			<div
				class="item"
				v-for="(item, deskNum) in seatList"
				:key="deskNum"
				@click="seatReservation(item)"
			>
				<img src="../../assets/images/seat.png" />
				<div
					class="mask"
					:style="{
						backgroundColor: item.deskStatus ? 'rgba(255, 0, 0, 0.411)' : ''
					}"
				>
					<span class="numberSigh">{{ item.deskNum }}</span>
				</div>
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
		<el-dialog title="座位信息" :visible.sync="showExist" width="30%" center>
			<div class="seatMessage">
				<div>{{ title }}</div>
				<div>{{ seatNum }}号自习座位</div>
				<br />
				<span>时间：</span>
				<br />
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
import { showDesk } from "../../api/reservation";
export default {
	components: { vheader, vfooter },
	data() {
		return {
			title: "",
			seatNum: "",
			showGone: false,
			showExist: false,
			checkTwice: false,
			seatList: [
				// {
				// 	status: 1,
				// 	index: 1,
				// 	lock: false
				// },
				// {
				// 	status: 1,
				// 	index: 2,
				// 	lock: false
				// },
				// {
				// 	status: 1,
				// 	index: 3,
				// 	lock: false
				// },
				// {
				// 	status: 0,
				// 	index: 4,
				// 	lock: false
				// },
				// {
				// 	status: 0,
				// 	index: 5,
				// 	lock: true
				// },
				// {
				// 	status: 0,
				// 	index: 6,
				// 	lock: true
				// }
			]
		};
	},
	created() {
		this.title = this.$route.params.title;
		this.libLevel = this.$route.params.libLevel;
		this.showDesk();
	},
	methods: {
		showDesk() {
			showDesk().then(res => {
				console.log("res:", res);
				console.log("libLevel:", this.libLevel);
				for (let i = 0; i < res.result.length; i++) {
					const element = res.result[i];
					if (element.libLevel == this.libLevel) {
						this.seatList.push(element);
					}
				}
				// let seatArr = res.result.filter(item => {
				// 	item.libLevel == this.libLevel;
				// });
				// this.seatList = JSON.parse(JSON.stringify(seatArr));
				console.log("seatList:", this.seatList);
			});
		},
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
			if (item.deskStatus) {
				this.showGone = true;
			} else {
				this.seatNum = item.deskNum;
				this.showExist = true;
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
#seatRes {
	width: 100%;
	/* background-color: #cccccc; */
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
.mask {
	width: 220px;
	height: 224px;
	border-radius: 10px;
	position: absolute;
	margin-top: -224px;
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
