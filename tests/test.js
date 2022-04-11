const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = "firebase-rules-course";

describe("Testing Firebase Rules", () => {

	it("Can read documents in the read-only collecction", async() => {
		const firestoreDB =  firebase.initializeTestApp({
				projectId: MY_PROJECT_ID
		}).firestore();
		const testDoc = firestoreDB.collection("readonly").doc("testDoc");
		await firebase.assertSucceeds(testDoc.get());
	});
	
});
