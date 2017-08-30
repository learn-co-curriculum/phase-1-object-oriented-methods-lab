const expect = chai.expect;

describe('boardMembers', function() {
  let polishedBoardMember;
  before(() => {
    polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
  })

  describe('boardMember Constructor Function', function() {
    it('can create a BoardMember with a name, home state, and training', function() {
      expect(polishedBoardMember).to.be.an.instanceof(BoardMember)
      expect(polishedBoardMember.name).to.equal("Mr. Polished")
      expect(polishedBoardMember.homeState).to.equal("New York")
      expect(polishedBoardMember.training).to.equal("law")
    })
  })

  describe('veto()', function() {
    it('returns "No, I must disagree"', function() {
      expect(polishedBoardMember.veto()).to.equal("No, I must disagree")
    })
  })

  describe('approve()', function() {
    it('returns "You can do that!"', function() {
      expect(polishedBoardMember.approve()).to.equal("You can do that!")
    })
  })

  describe('doCharity()', function() {
    it('returns "I like to help people."', function() {
      expect(polishedBoardMember.doCharity()).to.equal("I like to help people.")
    })
  })

  describe('releasePressStatement()', function() {
    it('returns "You will see great things from Scuber."', function() {
      expect(polishedBoardMember.releasePressStatement()).to.equal("You will see great things from Scuber.")
    })
  })

  describe('sayHi()', function() {
    it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
      expect(polishedBoardMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.")
    })
  })
})

