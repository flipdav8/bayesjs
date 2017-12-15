import { INode } from '../src/types'

export const node1: INode = {'id':'node1','states':['T','F'],'parents':['node25','node13','node16','node17','node37'],'cpt':[{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node2: INode = {'id':'node2','states':['T','F'],'parents':['node3','node4','node5','node6','node7','node8','node9'],'cpt':[{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'T','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'F','node8':'T','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'T','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'F','node8':'F','node9':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'T','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'F','node8':'T','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'T','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'T','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'T','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'T','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'T','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'T','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'T','node5':'F','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'T','node5':'F','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'T','node4':'F','node5':'F','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node3':'F','node4':'F','node5':'F','node6':'F','node7':'F','node8':'F','node9':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node3: INode = {'id':'node3','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node4: INode = {'id':'node4','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node5: INode = {'id':'node5','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node6: INode = {'id':'node6','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node7: INode = {'id':'node7','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node8: INode = {'id':'node8','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node9: INode = {'id':'node9','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node10: INode = {'id':'node10','states':['T','F'],'parents':['node11','node12'],'cpt':[{'when':{'node11':'T','node12':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node11':'F','node12':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node11':'T','node12':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node11':'F','node12':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node11: INode = {'id':'node11','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node12: INode = {'id':'node12','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node13: INode = {'id':'node13','states':['T','F'],'parents':['node14','node15'],'cpt':[{'when':{'node14':'T','node15':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node14':'F','node15':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node14':'T','node15':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node14':'F','node15':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node14: INode = {'id':'node14','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node15: INode = {'id':'node15','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node16: INode = {'id':'node16','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node17: INode = {'id':'node17','states':['T','F'],'parents':['node23','node18'],'cpt':[{'when':{'node23':'T','node18':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node23':'F','node18':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node23':'T','node18':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node23':'F','node18':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node18: INode = {'id':'node18','states':['T','F'],'parents':['node19','node20','node21','node22'],'cpt':[{'when':{'node19':'T','node20':'T','node21':'T','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'T','node21':'T','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'F','node21':'T','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'F','node21':'T','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'T','node21':'F','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'T','node21':'F','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'F','node21':'F','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'F','node21':'F','node22':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'T','node21':'T','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'T','node21':'T','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'F','node21':'T','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'F','node21':'T','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'T','node21':'F','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'T','node21':'F','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'T','node20':'F','node21':'F','node22':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node19':'F','node20':'F','node21':'F','node22':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node19: INode = {'id':'node19','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node20: INode = {'id':'node20','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node21: INode = {'id':'node21','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node22: INode = {'id':'node22','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node23: INode = {'id':'node23','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node24: INode = {'id':'node24','states':['T','F'],'parents':['node25','node13','node16','node17','node37'],'cpt':[{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node25: INode = {'id':'node25','states':['T','F'],'parents':['node26','node27','node28','node29','node30'],'cpt':[{'when':{'node26':'T','node27':'T','node28':'T','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'T','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'T','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'T','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'F','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'F','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'F','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'F','node29':'T','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'T','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'T','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'T','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'T','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'F','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'F','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'F','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'F','node29':'F','node30':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'T','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'T','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'T','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'T','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'F','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'F','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'F','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'F','node29':'T','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'T','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'T','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'T','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'T','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'T','node28':'F','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'T','node28':'F','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'T','node27':'F','node28':'F','node29':'F','node30':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node26':'F','node27':'F','node28':'F','node29':'F','node30':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node26: INode = {'id':'node26','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node27: INode = {'id':'node27','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node28: INode = {'id':'node28','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node29: INode = {'id':'node29','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node30: INode = {'id':'node30','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};
export const node31: INode = {'id':'node31','states':['T','F'],'parents':['node1','node24'],'cpt':[{'when':{'node1':'T','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'T','node24':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node32: INode = {'id':'node32','states':['T','F'],'parents':['node1','node24'],'cpt':[{'when':{'node1':'T','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'T','node24':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node33: INode = {'id':'node33','states':['T','F'],'parents':['node1','node24'],'cpt':[{'when':{'node1':'T','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'T','node24':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node34: INode = {'id':'node34','states':['T','F'],'parents':['node1','node24'],'cpt':[{'when':{'node1':'T','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'T','node24':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node35: INode = {'id':'node35','states':['T','F'],'parents':['node1','node24'],'cpt':[{'when':{'node1':'T','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'T','node24':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node1':'F','node24':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node36: INode = {'id':'node36','states':['T','F'],'parents':['node25','node13','node16','node17','node37'],'cpt':[{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'T'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'T','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'T','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'T','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'T','node16':'F','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'T','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0,'F':1}},{'when':{'node25':'F','node13':'F','node16':'F','node17':'F','node37':'F'},'then':{'T':0,'F':1}}]};
export const node37: INode = {'id':'node37','states':['T','F'],'parents':['node38','node39'],'cpt':[{'when':{'node38':'T','node39':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node38':'F','node39':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node38':'T','node39':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node38':'F','node39':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node38: INode = {'id':'node38','states':['T','F'],'parents':['node2','node10'],'cpt':[{'when':{'node2':'T','node10':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node2':'F','node10':'T'},'then':{'T':0.99,'F':0.01}},{'when':{'node2':'T','node10':'F'},'then':{'T':0.99,'F':0.01}},{'when':{'node2':'F','node10':'F'},'then':{'T':0.01,'F':0.99}}]};
export const node39: INode = {'id':'node39','states':['T','F'],'parents':[],'cpt':{'T':0.99,'F':0.01}};

export const allNodes = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36, node37, node38, node39];