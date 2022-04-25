const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = "firebase-rules-course";

describe("Testing Firebase Rules", () => {

	/*it("Can read documents in the read-only collecction", async() => {
		const firestoreDB =  firebase.initializeTestApp({
				projectId: MY_PROJECT_ID
		}).firestore();
		const testDoc = firestoreDB.collection("readonly").doc("testDoc");
		await firebase.assertSucceeds(testDoc.get());
	});*/

	it("Can read documents in the posts collection", async() => {
		const firestoreDB =  firebase.initializeTestApp({
				projectId: MY_PROJECT_ID,
				auth: {
					uid: " Bne8vaQoiB6TsasEP9yW"
				}
		}).firestore();
		const testDoc = firestoreDB.collection("posts").doc("3vi8MCYnq7aEge3LM1Ly");
		await firebase.assertSucceeds(testDoc.get());
	});

	it("Can't read documents in the posts collecction", async() => {
		const firestoreDB =  firebase.initializeTestApp({
				projectId: MY_PROJECT_ID,
				auth: {
					uid: " yRD34ul3fedpUjnYSgu1"
				}
		}).firestore();
		const testDoc = firestoreDB.collection("posts").doc("3vi8MCYnq7aEge3LM1Ly");
		await firebase.assertFails(testDoc.get());
	});

});
