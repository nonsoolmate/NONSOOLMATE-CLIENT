interface examListTypes {
  examId: number;
  examName: string;
  examTimeLimit: number;
  examResultStatus: string;
}

interface UniversityListsTypes {
  universityId: number;
  universityName: string;
  universityCategory: string;
  examList: examListTypes[];
}

export const universityLists: UniversityListsTypes[] = [
  {
    universityId: 1,
    universityName: "중앙대학교",
    universityCategory: "인문사회",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 2,
    universityName: "한양대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 3,
    universityName: "성균관대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 4,
    universityName: "성균관대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 5,
    universityName: "성균관대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 6,
    universityName: "성균관대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "답안 제출 전",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
];